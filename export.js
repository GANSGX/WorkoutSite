// Инициализация приложения
let fitnessData = JSON.parse(localStorage.getItem('fitnessData')) || {
    userName: '',
    userProgress: {},
    plans: []
  };
  
  // Сохранение данных в localStorage
  function saveData() {
    localStorage.setItem('fitnessData', JSON.stringify(fitnessData));
  }
  
  // Сохранение имени пользователя
  function saveName() {
    const userName = document.getElementById('userName').value;
    if (userName) {
      fitnessData.userName = userName;
      saveData();
      loadName();
    }
  }
  
  // Загрузка имени пользователя
  function loadName() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = fitnessData.userName ? `Привет, ${fitnessData.userName}!` : '';
  }
  
  // Переключение режимов добавления упражнения
  function toggleExerciseMode() {
    const mode = document.querySelector('input[name="exerciseMode"]:checked').value;
    document.getElementById('selectMode').style.display = mode === 'select' ? 'flex' : 'none';
    document.getElementById('manualMode').style.display = mode === 'manual' ? 'flex' : 'none';
  }
  
  // Обновление списка tier
  function updateTierList() {
    const muscleGroup = document.getElementById('muscleGroup').value;
    const tierSelect = document.getElementById('tier');
    tierSelect.innerHTML = '<option value="" disabled selected>Выберите tier</option>';
    if (muscleGroup) {
      ['S', 'A', 'C'].forEach(tier => {
        const option = document.createElement('option');
        option.value = tier;
        option.textContent = `${tier}-tier`;
        tierSelect.appendChild(option);
      });
    }
    updateExerciseList();
  }
  
  // Обновление списка упражнений
  function updateExerciseList() {
    const muscleGroup = document.getElementById('muscleGroup').value;
    const tier = document.getElementById('tier').value;
    const exerciseSelect = document.getElementById('exerciseNameSelect');
    exerciseSelect.innerHTML = '<option value="" disabled selected>Выберите упражнение</option>';
  
    if (muscleGroup && tier) {
      const exercises = {
        'Бицепс': { 'S': ['Подъём штанги на бицепс'], 'A': ['Молотковый подъём'], 'C': ['Сгибания с гантелями'] },
        'Трицепс': { 'S': ['Жим узким хватом'], 'A': ['Французский жим'], 'C': ['Разгибания на блоке'] },
        'Грудь': { 'S': ['Жим лёжа'], 'A': ['Жим гантелей'], 'C': ['Разводка'] },
        'Спина': { 'S': ['Становая тяга'], 'A': ['Тяга штанги в наклоне'], 'C': ['Гиперэкстензия'] },
        'Ноги': { 'S': ['Приседания со штангой'], 'A': ['Жим ногами'], 'C': ['Разгибания ног'] },
        'Плечи': { 'S': ['Жим штанги стоя'], 'A': ['Подъёмы гантелей через стороны'], 'C': ['Подъёмы штанги к подбородку'] },
        'Пресс': { 'S': ['Скручивания с весом'], 'A': ['Подъёмы ног'], 'C': ['Планка'] }
      };
  
      if (exercises[muscleGroup] && exercises[muscleGroup][tier]) {
        exercises[muscleGroup][tier].forEach(exercise => {
          const option = document.createElement('option');
          option.value = exercise;
          option.textContent = exercise;
          exerciseSelect.appendChild(option);
        });
      }
    }
  }
  
  // Добавление упражнения
  function addExercise() {
    const mode = document.querySelector('input[name="exerciseMode"]:checked').value;
    const sets = parseInt(document.getElementById('sets').value);
    const reps = parseInt(document.getElementById('reps').value);
    const weight = parseInt(document.getElementById('weight').value);
    let exerciseName, muscleGroup;
  
    if (mode === 'select') {
      exerciseName = document.getElementById('exerciseNameSelect').value;
      muscleGroup = document.getElementById('muscleGroup').value;
    } else {
      exerciseName = document.getElementById('exerciseNameManual').value;
      muscleGroup = document.getElementById('muscleGroupManual').value;
    }
  
    if (!exerciseName || !muscleGroup || !sets || !reps || isNaN(weight)) {
      alert('Заполните все поля!');
      return;
    }
  
    const today = new Date().toISOString().split('T')[0];
    if (!fitnessData.userProgress[today]) {
      fitnessData.userProgress[today] = [];
    }
  
    fitnessData.userProgress[today].push({
      name: exerciseName,
      muscleGroup,
      sets,
      reps,
      weight
    });
  
    saveData();
    loadWorkoutList();
    loadCalendar();
  }
  
  // Загрузка списка тренировок
  function loadWorkoutList() {
    const workoutList = document.getElementById('workoutList');
    workoutList.innerHTML = '';
  
    for (let date in fitnessData.userProgress) {
      const group = document.createElement('div');
      group.className = 'workout-group';
      group.innerHTML = `<h4>${date}</h4>`;
      fitnessData.userProgress[date].forEach((exercise, index) => {
        const item = document.createElement('div');
        item.className = 'workout-item';
        item.innerHTML = `
          <span class="exercise-name">${exercise.name}</span>
          <span>${exercise.muscleGroup} - ${exercise.sets} подходов x ${exercise.reps} повторений x ${exercise.weight} кг</span>
          <div>
            <button onclick="editExercise('${date}', ${index})">Ред.</button>
            <button onclick="deleteExercise('${date}', ${index})">Удалить</button>
          </div>
        `;
        group.appendChild(item);
      });
      workoutList.appendChild(group);
    }
  }
  
  // Редактирование упражнения
  function editExercise(date, index) {
    const exercise = fitnessData.userProgress[date][index];
    const newSets = prompt('Введите новое количество подходов:', exercise.sets);
    const newReps = prompt('Введите новое количество повторений:', exercise.reps);
    const newWeight = prompt('Введите новый вес (кг):', exercise.weight);
  
    if (newSets && newReps && newWeight) {
      fitnessData.userProgress[date][index].sets = parseInt(newSets);
      fitnessData.userProgress[date][index].reps = parseInt(newReps);
      fitnessData.userProgress[date][index].weight = parseInt(newWeight);
      saveData();
      loadWorkoutList();
      loadCalendar();
    }
  }
  
  // Удаление упражнения
  function deleteExercise(date, index) {
    if (confirm('Вы уверены, что хотите удалить это упражнение?')) {
      fitnessData.userProgress[date].splice(index, 1);
      if (fitnessData.userProgress[date].length === 0) {
        delete fitnessData.userProgress[date];
      }
      saveData();
      loadWorkoutList();
      loadCalendar();
    }
  }
  
  // Загрузка календаря
  function loadCalendar() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: Object.keys(fitnessData.userProgress).map(date => ({
        title: `${fitnessData.userProgress[date].length} упражнений`,
        start: date
      }))
    });
    calendar.render();
  }
  
  // Открытие модального окна для создания плана
  function openPlanModal() {
    document.getElementById('planModal').style.display = 'flex';
    document.getElementById('planName').value = '';
    document.getElementById('planMuscleGroup').value = '';
    document.getElementById('planExerciseList').innerHTML = '';
    togglePlanMode();
  }
  
  // Закрытие модального окна
  function closePlanModal() {
    document.getElementById('planModal').style.display = 'none';
  }
  
  // Переключение режимов в модальном окне
  function togglePlanMode() {
    const mode = document.querySelector('input[name="planMode"]:checked').value;
    document.getElementById('planSelectMode').style.display = mode === 'select' ? 'flex' : 'none';
    document.getElementById('planManualMode').style.display = mode === 'manual' ? 'flex' : 'none';
  }
  
  // Обновление списка упражнений в модальном окне
  function updatePlanExerciseList() {
    const muscleGroup = document.getElementById('planMuscleGroup').value;
    const tier = document.getElementById('planTier').value;
    const exerciseSelect = document.getElementById('planExerciseName');
    exerciseSelect.innerHTML = '<option value="" disabled selected>Упражнение</option>';
  
    if (muscleGroup && tier) {
      const exercises = {
        'Бицепс': { 'S': ['Подъём штанги на бицепс'], 'A': ['Молотковый подъём'], 'C': ['Сгибания с гантелями'] },
        'Трицепс': { 'S': ['Жим узким хватом'], 'A': ['Французский жим'], 'C': ['Разгибания на блоке'] },
        'Грудь': { 'S': ['Жим лёжа'], 'A': ['Жим гантелей'], 'C': ['Разводка'] },
        'Спина': { 'S': ['Становая тяга'], 'A': ['Тяга штанги в наклоне'], 'C': ['Гиперэкстензия'] },
        'Ноги': { 'S': ['Приседания со штангой'], 'A': ['Жим ногами'], 'C': ['Разгибания ног'] },
        'Плечи': { 'S': ['Жим штанги стоя'], 'A': ['Подъёмы гантелей через стороны'], 'C': ['Подъёмы штанги к подбородку'] },
        'Пресс': { 'S': ['Скручивания с весом'], 'A': ['Подъёмы ног'], 'C': ['Планка'] }
      };
  
      if (exercises[muscleGroup] && exercises[muscleGroup][tier]) {
        exercises[muscleGroup][tier].forEach(exercise => {
          const option = document.createElement('option');
          option.value = exercise;
          option.textContent = exercise;
          exerciseSelect.appendChild(option);
        });
      }
    }
  }
  
  // Добавление упражнения в план
  function addExerciseToPlan() {
    const exerciseName = document.getElementById('planExerciseName').value;
    const sets = parseInt(document.getElementById('planSets').value);
    const reps = parseInt(document.getElementById('planReps').value);
    const weight = parseInt(document.getElementById('planWeight').value);
  
    if (!exerciseName || isNaN(sets) || isNaN(reps) || isNaN(weight)) {
      alert('Заполните все поля!');
      return;
    }
  
    const list = document.getElementById('planExerciseList');
    const li = document.createElement('li');
    li.innerHTML = `
      ${exerciseName} - ${sets} подходов x ${reps} повторений x ${weight} кг
      <div>
        <button onclick="editPlanExercise(this, '${exerciseName}', ${sets}, ${reps}, ${weight})">Ред.</button>
        <button onclick="deletePlanExercise(this)">Удалить</button>
      </div>
    `;
    list.appendChild(li);
  }
  
  // Добавление упражнения вручную в план
  function addManualExerciseToPlan() {
    const exerciseName = document.getElementById('manualPlanExerciseName').value;
    const sets = parseInt(document.getElementById('manualPlanSets').value);
    const reps = parseInt(document.getElementById('manualPlanReps').value);
    const weight = parseInt(document.getElementById('manualPlanWeight').value);
  
    if (!exerciseName || isNaN(sets) || isNaN(reps) || isNaN(weight)) {
      alert('Заполните все поля!');
      return;
    }
  
    const list = document.getElementById('planExerciseList');
    const li = document.createElement('li');
    li.innerHTML = `
      ${exerciseName} (Custom) - ${sets} подходов x ${reps} повторений x ${weight} кг
      <div>
        <button onclick="editPlanExercise(this, '${exerciseName}', ${sets}, ${reps}, ${weight}, true)">Ред.</button>
        <button onclick="deletePlanExercise(this)">Удалить</button>
      </div>
    `;
    list.appendChild(li);
  }
  
  // Редактирование упражнения в плане
  function editPlanExercise(button, name, sets, reps, weight, isCustom = false) {
    const newSets = prompt('Введите новое количество подходов:', sets);
    const newReps = prompt('Введите новое количество повторений:', reps);
    const newWeight = prompt('Введите новый вес (кг):', weight);
  
    if (newSets && newReps && newWeight) {
      const li = button.parentElement.parentElement;
      li.firstChild.textContent = `${name}${isCustom ? ' (Custom)' : ''} - ${newSets} подходов x ${newReps} повторений x ${newWeight} кг`;
      button.setAttribute('onclick', `editPlanExercise(this, '${name}', ${newSets}, ${newReps}, ${newWeight}, ${isCustom})`);
    }
  }
  
  // Удаление упражнения из плана
  function deletePlanExercise(button) {
    if (confirm('Вы уверены, что хотите удалить это упражнение?')) {
      button.parentElement.parentElement.remove();
    }
  }
  
  // Сохранение плана
  function savePlan() {
    const planName = document.getElementById('planName').value;
    const muscleGroup = document.getElementById('planMuscleGroup').value;
    const exercises = Array.from(document.getElementById('planExerciseList').children).map(li => {
      const text = li.firstChild.textContent.split(' - ');
      const name = text[0];
      const details = text[1].split(' x ');
      return {
        name,
        sets: parseInt(details[0]),
        reps: parseInt(details[1]),
        weight: parseInt(details[2])
      };
    });
  
    if (!planName || !muscleGroup || exercises.length === 0) {
      alert('Заполните название плана, выберите группу мышц и добавьте хотя бы одно упражнение!');
      return;
    }
  
    fitnessData.plans.push({
      name: planName,
      muscleGroup,
      exercises
    });
  
    saveData();
    closePlanModal();
    loadPlans();
  }
  
  // Загрузка планов
  function loadPlans() {
    const planSelect = document.getElementById('planSelect');
    planSelect.innerHTML = '<option value="" selected>Выберите готовый план</option>';
    const plansList = document.getElementById('plansList');
    plansList.innerHTML = '';
  
    fitnessData.plans.forEach((plan, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${plan.name} (${plan.muscleGroup})`;
      planSelect.appendChild(option);
  
      const li = document.createElement('li');
      li.innerHTML = `
        ${plan.name} (${plan.muscleGroup})
        <div>
          <button onclick="editPlan(${index})">Редактировать</button>
          <button onclick="deletePlan(${index})">Удалить</button>
        </div>
      `;
      plansList.appendChild(li);
    });
  }
  
  // Редактирование плана
  function editPlan(index) {
    const plan = fitnessData.plans[index];
    document.getElementById('planName').value = plan.name;
    document.getElementById('planMuscleGroup').value = plan.muscleGroup;
    const list = document.getElementById('planExerciseList');
    list.innerHTML = '';
  
    plan.exercises.forEach(exercise => {
      const li = document.createElement('li');
      li.innerHTML = `
        ${exercise.name} - ${exercise.sets} подходов x ${exercise.reps} повторений x ${exercise.weight} кг
        <div>
          <button onclick="editPlanExercise(this, '${exercise.name}', ${exercise.sets}, ${exercise.reps}, ${exercise.weight}, ${exercise.name.includes('(Custom)')})">Ред.</button>
          <button onclick="deletePlanExercise(this)">Удалить</button>
        </div>
      `;
      list.appendChild(li);
    });
  
    fitnessData.plans.splice(index, 1);
    saveData();
    loadPlans();
    openPlanModal();
  }
  
  // Удаление плана
  function deletePlan(index) {
    if (confirm('Вы уверены, что хотите удалить этот план?')) {
      fitnessData.plans.splice(index, 1);
      saveData();
      loadPlans();
    }
  }
  
  // Загрузка упражнений из плана
  function loadPlanExercises() {
    const index = document.getElementById('planSelect').value;
    if (index === '') return;
  
    const plan = fitnessData.plans[index];
    const today = new Date().toISOString().split('T')[0];
    if (!fitnessData.userProgress[today]) {
      fitnessData.userProgress[today] = [];
    }
  
    plan.exercises.forEach(exercise => {
      fitnessData.userProgress[today].push({
        name: exercise.name,
        muscleGroup: plan.muscleGroup,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight
      });
    });
  
    saveData();
    loadWorkoutList();
    loadCalendar();
  }
  
  // Открытие списка планов
  function openPlansListModal() {
    document.getElementById('plansListModal').style.display = 'flex';
  }
  
  // Закрытие списка планов
  function closePlansListModal() {
    document.getElementById('plansListModal').style.display = 'none';
  }
  
  // Переключение режимов экспорта
  function toggleExportMode() {
    const mode = document.querySelector('input[name="exportMode"]:checked').value;
    document.getElementById('currentPeriodMode').style.display = mode === 'current' ? 'block' : 'none';
    document.getElementById('customPeriodMode').style.display = mode === 'custom' ? 'block' : 'none';
  }
  
  // Функция для форматирования даты и получения дня недели
  function formatDateWithDay(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('ru-RU', options);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  
  // Функция для экспорта тренировок в Telegram
  function exportWorkoutsToTelegram() {
    const botToken = '7857710591:AAGIRTLRpoPykJA9m4ybNuqRV42KHByHT7E'; // Твой токен бота
    const userId = prompt('Введите ваш Telegram User ID (или ID друга):'); // Пользователь вводит свой Telegram ID
    if (!userId) {
      alert('Пожалуйста, введите Telegram User ID!');
      return;
    }
  
    const mode = document.querySelector('input[name="exportMode"]:checked').value;
    let startDate, endDate, periodLabel;
  
    if (mode === 'current') {
      const period = document.getElementById('exportPeriod').value;
      const today = new Date();
  
      // Определяем временной диапазон для текущего периода
      switch (period) {
        case 'day':
          startDate = new Date(today);
          endDate = new Date(today);
          periodLabel = '1 день';
          break;
        case 'week':
          startDate = new Date(today);
          startDate.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));
          endDate = new Date(startDate);
          endDate.setDate(endDate.getDate() + 6);
          periodLabel = '1 неделя';
          break;
        case 'month':
          startDate = new Date(today.getFullYear(), today.getMonth(), 1);
          endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          periodLabel = '1 месяц';
          break;
        case 'halfyear':
          startDate = new Date(today);
          startDate.setMonth(today.getMonth() - 6);
          startDate.setDate(1);
          endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          periodLabel = '6 месяцев';
          break;
        case 'year':
          startDate = new Date(today.getFullYear(), 0, 1);
          endDate = new Date(today.getFullYear(), 11, 31);
          periodLabel = '1 год';
          break;
      }
    } else {
      // Пользовательский интервал
      const startDateInput = document.getElementById('startDate').value;
      const endDateInput = document.getElementById('endDate').value;
  
      if (!startDateInput || !endDateInput) {
        alert('Пожалуйста, выберите начальную и конечную дату!');
        return;
      }
  
      startDate = new Date(startDateInput);
      endDate = new Date(endDateInput);
  
      if (startDate > endDate) {
        alert('Начальная дата не может быть позже конечной!');
        return;
      }
  
      // Определяем метку периода на основе разницы дат
      const diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      if (diffDays <= 1) {
        periodLabel = '1 день';
      } else if (diffDays <= 7) {
        periodLabel = '1 неделя';
      } else if (diffDays <= 31) {
        periodLabel = '1 месяц';
      } else if (diffDays <= 183) {
        periodLabel = '6 месяцев';
      } else {
        periodLabel = '1 год';
      }
    }
  
    // Собираем тренировки за выбранный период
    const data = JSON.parse(localStorage.getItem('fitnessData'));
    let workoutsByMuscleGroup = {};
    for (let date in data.userProgress) {
      const currentDate = new Date(date);
      if (currentDate >= startDate && currentDate <= endDate) {
        data.userProgress[date].forEach(workout => {
          const muscleGroup = workout.muscleGroup;
          if (!workoutsByMuscleGroup[muscleGroup]) {
            workoutsByMuscleGroup[muscleGroup] = {};
          }
          if (!workoutsByMuscleGroup[muscleGroup][date]) {
            workoutsByMuscleGroup[muscleGroup][date] = [];
          }
          workoutsByMuscleGroup[muscleGroup][date].push(workout);
        });
      }
    }
  
    if (Object.keys(workoutsByMuscleGroup).length === 0) {
      alert('Нет тренировок за выбранный период!');
      return;
    }
  
    // Формируем сообщение для каждой группы мышц
    for (let muscleGroup in workoutsByMuscleGroup) {
      let message = `${muscleGroup} (${periodLabel})\n\n`;
      const dates = Object.keys(workoutsByMuscleGroup[muscleGroup]).sort(); // Сортируем даты по возрастанию
  
      dates.forEach(date => {
        const formattedDate = formatDateWithDay(date);
        message += `${formattedDate} -\n`;
        workoutsByMuscleGroup[muscleGroup][date].forEach(workout => {
          message += `${workout.name} ${workout.sets}х${workout.reps}х${workout.weight}кг\n`;
        });
        message += '\n';
      });
  
      // Отправляем сообщение в Telegram
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: userId,
          text: message
        })
      })
      .then(response => response.json())
      .then(data => {
        if (!data.ok) {
          alert(`Ошибка при отправке для ${muscleGroup}: ${data.description}`);
        }
      })
      .catch(error => alert(`Ошибка при отправке для ${muscleGroup}: ${error}`));
    }
  
    alert('Тренировки отправлены в Telegram!');
  }
  
  // Функция анализа прогресса
  function analyzeProgress() {
    const data = JSON.parse(localStorage.getItem('fitnessData'));
    const muscleGroup = document.getElementById('analysisMuscleGroup').value;
    const resultDiv = document.getElementById('progressResult');
    resultDiv.innerHTML = '';
  
    if (!muscleGroup) {
      resultDiv.innerHTML = '<p>Выберите группу мышц для анализа!</p>';
      return;
    }
  
    let allWorkouts = [];
    for (let date in data.userProgress) {
      data.userProgress[date].forEach(w => {
        if (w.muscleGroup === muscleGroup) allWorkouts.push({ date, ...w });
      });
    }
  
    if (allWorkouts.length === 0) {
      resultDiv.innerHTML = `<p>Нет тренировок для группы мышц "${muscleGroup}".</p>`;
      return;
    }
  
    // Анализ по упражнениям
    const exercises = {};
    allWorkouts.forEach(w => {
      if (!exercises[w.name]) exercises[w.name] = [];
      exercises[w.name].push({ date: w.date, sets: w.sets, reps: w.reps, weight: w.weight });
    });
  
    let analysis = `<h3>Анализ прогресса для "${muscleGroup}"</h3>`;
    for (let exercise in exercises) {
      const workouts = exercises[exercise];
      let maxWeight = 0, maxReps = 0, totalSets = 0;
  
      workouts.forEach(w => {
        maxWeight = Math.max(maxWeight, w.weight);
        maxReps = Math.max(maxReps, w.reps);
        totalSets += w.sets;
      });
  
      analysis += `
        <div class="progress-item">
          <h4>${exercise}</h4>
          <p>Максимальный вес: ${maxWeight} кг</p>
          <p>Максимальное повторений: ${maxReps}</p>
          <p>Общее количество подходов: ${totalSets}</p>
          <p>Тренировок: ${workouts.length}</p>
        </div>
      `;
    }
  
    resultDiv.innerHTML = analysis;
  }
  
  // Загрузка при открытии страницы
  document.addEventListener('DOMContentLoaded', () => {
    loadName();
    loadCalendar();
    loadWorkoutList();
    updateTierList();
    toggleExerciseMode();
    loadPlans();
  });