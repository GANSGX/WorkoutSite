// Данные упражнений (без изменений)
const exerciseData = {
    "Бицепс": {
      "S": [
        "Сгибания рук со штангой (Barbell Curl)",
        "Сгибания рук с гантелями (Dumbbell Curl)",
        "Молотковый хват с гантелями (Hammer Curl)",
        "Подтягивания узким обратным хватом (Chin-Ups)",
        "Сгибания на скамье Скотта со штангой (Preacher Curl)",
        "Сгибания с EZ-штангой (EZ-Bar Curl)",
        "Концентрированные сгибания (Concentration Curl)",
        "Сгибания на бицепс-машине (Bicep Machine Curl)",
        "Сгибания с канатной рукоятью в кроссовере (Cable Curl)",
        "Подъём штанги в стиле '21' (21s)",
        "Сгибания рук с гантелями на наклонной скамье (Incline Dumbbell Curl)",
        "Сгибания с резинкой (Resistance Band Curl)",
        "Сгибания Зоттмана (Zottman Curl)",
        "Сгибания с гантелями сидя (Seated Dumbbell Curl)",
        "Сгибания с гирей (Kettlebell Curl)",
        "Сгибания на блоке снизу (Low Cable Curl)",
        "Сгибания с гантелями в стиле паука (Spider Curl)",
        "Подтягивания с весом обратным хватом",
        "Сгибания с гантелями с поворотом запястья (Twist Curl)",
        "Сгибания на TRX (TRX Bicep Curl)"
      ],
      "A": [
        "Сгибания рук с пустым грифом",
        "Сгибания с гантелями стоя одной рукой",
        "Сгибания с лёгкими гантелями в быстром темпе",
        "Подтягивания широким обратным хватом",
        "Сгибания на скамье Скотта с гантелями",
        "Сгибания с прямой штангой в кроссовере",
        "Сгибания с гантелями лёжа на скамье",
        "Сгибания с резинкой в шаге",
        "Сгибания с гирей снизу вверх",
        "Сгибания с двумя гантелями одновременно",
        "Сгибания с канатом в кроссовере одной рукой",
        "Сгибания с гантелями с наклоном вперёд",
        "Сгибания с лёгкой штангой в стиле '21'",
        "Сгибания с гантелями в положении стоя с упором",
        "Подтягивания с резинкой обратным хватом",
        "Сгибания с гантелями с супинацией",
        "Сгибания с гирей в наклоне",
        "Сгибания с резинкой сидя",
        "Сгибания с гантелями в статике",
        "Сгибания с канатом в кроссовере с паузой"
      ],
      "C": [
        "Сгибания с бутылками воды",
        "Сгибания с лёгкими гантелями без веса",
        "Сгибания рук без отягощения",
        "Сгибания с резинкой слабого сопротивления",
        "Сгибания с пустым грифом сидя",
        "Сгибания с гантелями в пол-амплитуды",
        "Сгибания с гирей одной рукой без контроля",
        "Сгибания с канатом в кроссовере внизу",
        "Сгибания с лёгкой штангой без напряжения",
        "Сгибания с гантелями в расслабленном темпе",
        "Сгибания с резинкой в полусогнутом положении",
        "Сгибания с гирей в статике",
        "Сгибания с гантелями с минимальным весом",
        "Сгибания с пустой штангой стоя",
        "Сгибания с канатом в кроссовере без фиксации",
        "Сгибания с гантелями с прыжками",
        "Сгибания с резинкой в лёгком режиме",
        "Сгибания с гирей без контроля локтей",
        "Сгибания с гантелями в хаотичном темпе",
        "Сгибания рук с весом тела (имитация)"
      ]
    },
    "Трицепс": {
      "S": [
        "Жим узким хватом (Close-Grip Bench Press)",
        "Французский жим со штангой (French Press)",
        "Отжимания на брусьях (Dips)",
        "Разгибания рук в кроссовере (Cable Tricep Pushdown)",
        "Жим штанги лёжа с узким хватом",
        "Разгибания рук с гантелью над головой (Overhead Dumbbell Extension)",
        "Отжимания от скамьи (Bench Dips)",
        "Разгибания с EZ-штангой лёжа (Skull Crushers)",
        "Разгибания с канатом в кроссовере",
        "Разгибания одной рукой с гантелью",
        "Жим в тренажёре на трицепс (Tricep Machine Press)",
        "Отжимания с узкой постановкой рук (Diamond Push-Ups)",
        "Разгибания с гантелями сидя",
        "Разгибания с гирей над головой",
        "Разгибания на блоке сверху с прямой рукоятью",
        "Французский жим с гантелями лёжа",
        "Разгибания рук с резинкой",
        "Отжимания на брусьях с весом",
        "Разгибания с канатом одной рукой",
        "Жим Tate (Tate Press)"
      ],
      "A": [
        "Жим узким хватом с лёгкой штангой",
        "Французский жим с пустым грифом",
        "Отжимания на брусьях с резинкой",
        "Разгибания с канатом в кроссовере внизу",
        "Жим штанги с узким хватом сидя",
        "Разгибания с гантелью одной рукой стоя",
        "Отжимания от скамьи с ногами на полу",
        "Разгибания с прямой штангой лёжа",
        "Разгибания с канатом в кроссовере с паузой",
        "Разгибания с лёгкой гантелью сидя",
        "Жим в тренажёре с минимальным весом",
        "Отжимания с узкой постановкой рук на коленях",
        "Разгибания с гирей в наклоне",
        "Разгибания с резинкой в шаге",
        "Разгибания на блоке с лёгкой рукоятью",
        "Французский жим с гантелями сидя",
        "Разгибания рук с резинкой в статике",
        "Отжимания на брусьях без веса",
        "Разгибания с канатом в кроссовере в пол-амплитуды",
        "Жим Tate с лёгкими гантелями"
      ],
      "C": [
        "Разгибания рук без веса",
        "Отжимания от скамьи с минимальным усилием",
        "Разгибания с лёгкой резинкой",
        "Жим узким хватом с пустым грифом",
        "Французский жим без отягощения",
        "Отжимания на брусьях в пол-амплитуды",
        "Разгибания с канатом в кроссовере без напряжения",
        "Разгибания с гантелью в расслабленном темпе",
        "Отжимания с узкой постановкой рук без контроля",
        "Разгибания с гирей в хаотичном темпе",
        "Разгибания с резинкой слабого сопротивления",
        "Жим в тренажёре без веса",
        "Разгибания с канатом в кроссовере внизу",
        "Французский жим с пустым грифом сидя",
        "Отжимания от скамьи в лёгком режиме",
        "Разгибания с гантелью без фиксации",
        "Разгибания с гирей в статике",
        "Отжимания на брусьях с прыжками",
        "Разгибания рук с весом тела",
        "Жим Tate без веса"
      ]
    },
    "Грудь": {
      "S": [
        "Жим штанги лёжа (Bench Press)",
        "Жим гантелей лёжа (Dumbbell Bench Press)",
        "Разводка гантелей лёжа (Dumbbell Flyes)",
        "Отжимания от пола (Push-Ups)",
        "Жим в тренажёре (Chest Press Machine)",
        "Жим штанги на наклонной скамье (Incline Bench Press)",
        "Жим гантелей на наклонной скамье",
        "Разводка на наклонной скамье",
        "Сведение рук в кроссовере (Cable Crossover)",
        "Отжимания на брусьях с наклоном",
        "Жим штанги на скамье с обратным наклоном",
        "Пуловер с гантелью (Dumbbell Pullover)",
        "Сведение рук в тренажёре (Pec Deck Fly)",
        "Жим одной рукой с гантелью",
        "Отжимания с широкой постановкой рук",
        "Жим в Смите (Smith Machine Bench Press)",
        "Разводка с гантелями на полу",
        "Жим гири лёжа",
        "Сведение рук с резинкой",
        "Отжимания с хлопком (Clap Push-Ups)"
      ],
      "A": [
        "Жим штанги лёжа с лёгким весом",
        "Жим гантелей лёжа на полу",
        "Разводка с лёгкими гантелями",
        "Отжимания на коленях",
        "Жим в тренажёре с минимальным весом",
        "Жим штанги на наклонной скамье с пустым грифом",
        "Жим гантелей на наклонной скамье в пол-амплитуды",
        "Разводка на наклонной скамье с лёгким весом",
        "Сведение рук в кроссовере внизу",
        "Отжимания на брусьях без наклона",
        "Жим штанги на скамье с обратным наклоном с паузой",
        "Пуловер с лёгкой гантелью",
        "Сведение рук в тренажёре в пол-амплитуды",
        "Жим одной рукой с гирей",
        "Отжимания с узкой постановкой рук",
        "Жим в Смите с лёгким весом",
        "Разводка с гантелями сидя",
        "Жим гири на наклонной скамье",
        "Сведение рук с резинкой в шаге",
        "Отжимания с хлопком на коленях"
      ],
      "C": [
        "Жим пустого грифа лёжа",
        "Жим гантелей без веса",
        "Разводка без отягощения",
        "Отжимания с минимальным усилием",
        "Жим в тренажёре без нагрузки",
        "Жим штанги на наклонной скамье без веса",
        "Жим гантелей на наклонной скамье без контроля",
        "Разводка на наклонной скамье без напряжения",
        "Сведение рук в кроссовере без фиксации",
        "Отжимания на брусьях в лёгком режиме",
        "Жим штанги на скамье с обратным наклоном без веса",
        "Пуловер без гантели",
        "Сведение рук в тренажёре без веса",
        "Жим одной рукой без отягощения",
        "Отжимания с широкой постановкой рук в пол-амплитуды",
        "Жим в Смите без нагрузки",
        "Разводка с гантелями в расслабленном темпе",
        "Жим гири без контроля",
        "Сведение рук с резинкой слабого сопротивления",
        "Отжимания с хлопком без прыжка"
      ]
    },
    "Спина": {
      "S": [
        "Становая тяга (Deadlift)",
        "Подтягивания (Pull-Ups)",
        "Тяга штанги в наклоне (Bent-Over Row)",
        "Тяга гантели одной рукой (One-Arm Dumbbell Row)",
        "Тяга вертикального блока (Lat Pulldown)",
        "Тяга горизонтального блока (Seated Cable Row)",
        "Тяга Т-штанги (T-Bar Row)",
        "Подтягивания с весом",
        "Тяга штанги в Смите в наклоне",
        "Тяга гантелей в наклоне",
        "Тяга блока к поясу сидя",
        "Подтягивания узким хватом",
        "Тяга гири в наклоне",
        "Тяга резинки к поясу",
        "Тяга вертикального блока узким хватом",
        "Тяга штанги к подбородку (для трапеций)",
        "Шраги со штангой (Barbell Shrugs)",
        "Шраги с гантелями (Dumbbell Shrugs)",
        "Тяга блока за голову",
        "Гиперэкстензии (Hyperextensions)"
      ],
      "A": [
        "Становая тяга с лёгким весом",
        "Подтягивания с резинкой",
        "Тяга штанги в наклоне с пустым грифом",
        "Тяга гантели одной рукой с паузой",
        "Тяга вертикального блока с минимальным весом",
        "Тяга горизонтального блока в пол-амплитуды",
        "Тяга Т-штанги с лёгким весом",
        "Подтягивания узким хватом с резинкой",
        "Тяга штанги в Смите с паузой",
        "Тяга гантелей в наклоне сидя",
        "Тяга блока к поясу с лёгким весом",
        "Подтягивания с поддержкой",
        "Тяга гири в наклоне одной рукой",
        "Тяга резинки к поясу в шаге",
        "Тяга вертикального блока с паузой",
        "Тяга штанги к подбородку с лёгким весом",
        "Шраги со штангой с минимальным весом",
        "Шраги с гантелями в пол-амплитуды",
        "Тяга блока за голову с лёгким весом",
        "Гиперэкстензии без веса"
      ],
      "C": [
        "Становая тяга без веса",
        "Подтягивания в пол-амплитуды",
        "Тяга штанги в наклоне без нагрузки",
        "Тяга гантели одной рукой без контроля",
        "Тяга вертикального блока без веса",
        "Тяга горизонтального блока без напряжения",
        "Тяга Т-штанги без отягощения",
        "Подтягивания с резинкой в лёгком режиме",
        "Тяга штанги в Смите без веса",
        "Тяга гантелей в наклоне без фиксации",
        "Тяга блока к поясу без нагрузки",
        "Подтягивания узким хватом без усилия",
        "Тяга гири в наклоне без веса",
        "Тяга резинки к поясу без сопротивления",
        "Тяга вертикального блока в расслабленном темпе",
        "Тяга штанги к подбородку без веса",
        "Шраги со штангой без нагрузки",
        "Шраги с гантелями без напряжения",
        "Тяга блока за голову без веса",
        "Гиперэкстензии в пол-амплитуды"
      ]
    },
    "Плечи": {
      "S": [
        "Жим штанги стоя (Overhead Press)",
        "Жим гантелей сидя (Dumbbell Shoulder Press)",
        "Разведения гантелей в стороны (Lateral Raises)",
        "Тяга штанги к подбородку (Upright Row)",
        "Жим Арнольда (Arnold Press)",
        "Разведения гантелей в наклоне (Rear Delt Flyes)",
        "Жим в тренажёре на плечи",
        "Разведения в кроссовере в стороны",
        "Тяга блока к подбородку",
        "Жим штанги из-за головы",
        "Разведения с гантелями стоя",
        "Жим гири одной рукой",
        "Разведения с резинкой в стороны",
        "Тяга гантелей к подбородку",
        "Жим в Смите стоя",
        "Разведения одной рукой с гантелью",
        "Жим штанги сидя",
        "Разведения с гирей в наклоне",
        "Тяга каната к лицу (Face Pulls)",
        "Подъёмы гантелей вперёд (Front Raises)"
      ],
      "A": [
        "Жим штанги стоя с лёгким весом",
        "Жим гантелей сидя с паузой",
        "Разведения гантелей в стороны с лёгким весом",
        "Тяга штанги к подбородку с пустым грифом",
        "Жим Арнольда с лёгкими гантелями",
        "Разведения гантелей в наклоне в пол-амплитуды",
        "Жим в тренажёре с минимальным весом",
        "Разведения в кроссовере с паузой",
        "Тяга блока к подбородку с лёгким весом",
        "Жим штанги из-за головы с паузой",
        "Разведения с гантелями стоя в пол-амплитуды",
        "Жим гири одной рукой с лёгким весом",
        "Разведения с резинкой в стороны в шаге",
        "Тяга гантелей к подбородку с паузой",
        "Жим в Смите с лёгким весом",
        "Разведения одной рукой с гирей",
        "Жим штанги сидя с пустым грифом",
        "Разведения с гирей в наклоне с паузой",
        "Тяга каната к лицу с лёгким весом",
        "Подъёмы гантелей вперёд с минимальным весом"
      ],
      "C": [
        "Жим штанги стоя без веса",
        "Жим гантелей сидя без нагрузки",
        "Разведения гантелей в стороны без веса",
        "Тяга штанги к подбородку без отягощения",
        "Жим Арнольда без гантелей",
        "Разведения гантелей в наклоне без напряжения",
        "Жим в тренажёре без веса",
        "Разведения в кроссовере без фиксации",
        "Тяга блока к подбородку без нагрузки",
        "Жим штанги из-за головы без веса",
        "Разведения с гантелями стоя без контроля",
        "Жим гири одной рукой без веса",
        "Разведения с резинкой без сопротивления",
        "Тяга гантелей к подбородку без веса",
        "Жим в Смите без нагрузки",
        "Разведения одной рукой без отягощения",
        "Жим штанги сидя без веса",
        "Разведения с гирей в наклоне без усилия",
        "Тяга каната к лицу без веса",
        "Подъёмы гантелей вперёд без нагрузки"
      ]
    },
    "Ноги": {
      "S": [
        "Приседания со штангой (Barbell Squats)",
        "Жим ногами (Leg Press)",
        "Становая тяга на прямых ногах (Romanian Deadlift)",
        "Выпады с гантелями (Dumbbell Lunges)",
        "Приседания в Смите (Smith Machine Squats)",
        "Болгарские сплит-приседания (Bulgarian Split Squats)",
        "Приседания с гирей (Goblet Squats)",
        "Подъёмы на носки со штангой (Barbell Calf Raises)",
        "Жим одной ногой в тренажёре",
        "Выпады со штангой",
        "Приседания с гантелями",
        "Становая тяга сумо (Sumo Deadlift)",
        "Подъёмы на носки в тренажёре",
        "Приседания в тренажёре Гаккеншмидта",
        "Выпады назад с гантелями",
        "Приседания с резинкой",
        "Жим ногами с узкой постановкой",
        "Подъёмы на носки сидя (Seated Calf Raises)",
        "Выпады в сторону с гантелями",
        "Приседания с весом тела с прыжком (Jump Squats)"
      ],
      "A": [
        "Приседания со штангой с лёгким весом",
        "Жим ногами с минимальным весом",
        "Становая тяга на прямых ногах с пустым грифом",
        "Выпады с лёгкими гантелями",
        "Приседания в Смите с паузой",
        "Болгарские сплит-приседания с лёгким весом",
        "Приседания с гирей в пол-амплитуды",
        "Подъёмы на носки с гантелями",
        "Жим одной ногой с лёгким весом",
        "Выпады со штангой с паузой",
        "Приседания с гантелями в шаге",
        "Становая тяга сумо с лёгким весом",
        "Подъёмы на носки в тренажёре с паузой",
        "Приседания в тренажёре Гаккеншмидта с лёгким весом",
        "Выпады назад с резинкой",
        "Приседания с резинкой в пол-амплитуды",
        "Жим ногами с узкой постановкой с паузой",
        "Подъёмы на носки сидя с лёгким весом",
        "Выпады в сторону с гирей",
        "Приседания с весом тела без прыжка"
      ],
      "C": [
        "Приседания со штангой без веса",
        "Жим ногами без нагрузки",
        "Становая тяга на прямых ногах без веса",
        "Выпады без отягощения",
        "Приседания в Смите без веса",
        "Болгарские сплит-приседания без нагрузки",
        "Приседания с гирей без веса",
        "Подъёмы на носки без отягощения",
        "Жим одной ногой без веса",
        "Выпады со штангой без нагрузки",
        "Приседания с гантелями без веса",
        "Становая тяга сумо без веса",
        "Подъёмы на носки в тренажёре без нагрузки",
        "Приседания в тренажёре Гаккеншмидта без веса",
        "Выпады назад без отягощения",
        "Приседания с резинкой без сопротивления",
        "Жим ногами с узкой постановкой без веса",
        "Подъёмы на носки сидя без нагрузки",
        "Выпады в сторону без веса",
        "Приседания с весом тела в пол-амплитуды"
      ]
    },
    "Пресс": {
      "S": [
        "Скручивания (Crunches)",
        "Подъёмы ног лёжа (Leg Raises)",
        "Планка (Plank)",
        "Русские твисты (Russian Twists)",
        "Подъёмы ног в висе (Hanging Leg Raises)",
        "Скручивания на наклонной скамье",
        "Боковая планка (Side Plank)",
        "Велосипед (Bicycle Crunches)",
        "Скручивания с гантелью",
        "Подъёмы корпуса лёжа (Sit-Ups)",
        "Скручивания с канатом в кроссовере",
        "Планка с подтягиванием колен (Mountain Climbers)",
        "Скручивания с гирей",
        "Подъёмы ног с резинкой",
        "Скручивания на фитболе",
        "Планка с движением рук",
        "Боковые скручивания (Side Crunches)",
        "Подъёмы корпуса с весом",
        "Твисты с гантелью сидя",
        "Планка с ротацией (Plank Rotations)"
      ],
      "A": [
        "Скручивания с паузой",
        "Подъёмы ног лёжа в пол-амплитуды",
        "Планка с минимальным временем",
        "Русские твисты с лёгким весом",
        "Подъёмы ног в висе с поддержкой",
        "Скручивания на наклонной скамье с паузой",
        "Боковая планка с лёгким весом",
        "Велосипед в медленном темпе",
        "Скручивания с лёгкой гантелью",
        "Подъёмы корпуса лёжа с паузой",
        "Скручивания с канатом в кроссовере внизу",
        "Планка с подтягиванием колен в пол-амплитуды",
        "Скручивания с гирей в шаге",
        "Подъёмы ног с резинкой в пол-амплитуды",
        "Скручивания на фитболе с паузой",
        "Планка с движением рук с лёгким весом",
        "Боковые скручивания с минимальным усилием",
        "Подъёмы корпуса без веса",
        "Твисты с гантелью сидя в пол-амплитуды",
        "Планка с ротацией с паузой"
      ],
      "C": [
        "Скручивания без напряжения",
        "Подъёмы ног лёжа без контроля",
        "Планка в расслабленном темпе",
        "Русские твисты без веса",
        "Подъёмы ног в висе без амплитуды",
        "Скручивания на наклонной скамье без усилия",
        "Боковая планка без фиксации",
        "Велосипед без напряжения",
        "Скручивания без отягощения",
        "Подъёмы корпуса лёжа без контроля",
        "Скручивания с канатом в кроссовере без веса",
        "Планка с подтягиванием колен без усилия",
        "Скручивания с гирей без веса",
        "Подъёмы ног с резинкой без сопротивления",
        "Скручивания на фитболе без напряжения",
        "Планка с движением рук без нагрузки",
        "Боковые скручивания без амплитуды",
        "Подъёмы корпуса без усилия",
        "Твисты с гантелью сидя без веса",
        "Планка с ротацией без контроля"
      ]
    }
  };

  
  // Инициализация localStorage
function initLocalStorage() {
  if (!localStorage.getItem('fitnessData')) {
    localStorage.setItem('fitnessData', JSON.stringify({ userName: '', userProgress: {}, trainingPlans: {} }));
  }
}
initLocalStorage();

// Загрузка имени
function loadName() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const userNameInput = document.getElementById('userName');
  const greeting = document.getElementById('greeting');
  userNameInput.value = data.userName || '';
  greeting.textContent = data.userName ? `Привет, ${data.userName}!` : '';
}

function saveName() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  data.userName = document.getElementById('userName').value;
  localStorage.setItem('fitnessData', JSON.stringify(data));
  loadName();
}

// Загрузка календаря
let selectedDate = new Date().toISOString().split('T')[0]; // Начальная дата — текущая
function loadCalendar() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const events = Object.keys(data.userProgress).map(date => ({
    title: `${data.userProgress[date].length} упражнений`,
    start: date,
    backgroundColor: '#00ff00',
    allDay: true
  }));

  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: events,
    height: 300,
    headerToolbar: { left: 'prev,next', center: 'title', right: '' },
    dayMaxEvents: 1,
    dateClick: function(info) {
      selectedDate = info.dateStr; // Сохраняем выбранную дату
      info.dayEl.style.backgroundColor = '#e0e0e0'; // Выделяем выбранную дату
      loadWorkoutList(); // Обновляем список тренировок
      calendar.gotoDate(selectedDate); // Переходим к выбранной дате
    },
    eventClick: function(info) {
      selectedDate = info.event.startStr; // При клике на событие тоже устанавливаем дату
      info.el.style.backgroundColor = '#e0e0e0'; // Выделяем событие
      loadWorkoutList();
      calendar.gotoDate(selectedDate);
    }
  });
  calendar.render();
}

// Переключение режима ввода упражнения
function toggleExerciseMode() {
  const mode = document.querySelector('input[name="exerciseMode"]:checked').value;
  document.getElementById('selectMode').style.display = mode === 'select' ? 'block' : 'none';
  document.getElementById('manualMode').style.display = mode === 'manual' ? 'block' : 'none';
}

// Обновление списка tier-ов
function updateTierList() {
  const muscleGroup = document.getElementById('muscleGroup').value;
  const tierSelect = document.getElementById('tier');
  const exerciseSelect = document.getElementById('exerciseNameSelect');

  tierSelect.disabled = !muscleGroup;
  exerciseSelect.disabled = true;
  tierSelect.innerHTML = '<option value="" disabled selected>Выберите tier</option>';
  exerciseSelect.innerHTML = '<option value="" disabled selected>Выберите упражнение</option>';

  if (muscleGroup) {
    tierSelect.innerHTML += '<option value="S">S-tier</option><option value="A">A-tier</option><option value="C">C-tier</option>';
    tierSelect.disabled = false;
  }
}

// Обновление списка упражнений
function updateExerciseList() {
  const muscleGroup = document.getElementById('muscleGroup').value;
  const tier = document.getElementById('tier').value;
  const exerciseSelect = document.getElementById('exerciseNameSelect');

  exerciseSelect.innerHTML = '<option value="" disabled selected>Выберите упражнение</option>';
  exerciseSelect.disabled = !tier;

  if (muscleGroup && tier) {
    const exercises = exerciseData[muscleGroup][tier];
    exercises.forEach(ex => exerciseSelect.innerHTML += `<option value="${ex}">${ex}</option>`);
    exerciseSelect.disabled = false;
  }
}

// Добавление упражнения
function addExercise() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const mode = document.querySelector('input[name="exerciseMode"]:checked').value;
  let name, muscleGroup, tier;

  if (mode === 'select') {
    name = document.getElementById('exerciseNameSelect').value;
    muscleGroup = document.getElementById('muscleGroup').value;
    tier = document.getElementById('tier').value;
  } else {
    name = document.getElementById('exerciseNameManual').value;
    muscleGroup = document.getElementById('muscleGroupManual').value;
    tier = 'Custom';
  }

  const sets = parseInt(document.getElementById('sets').value) || 0;
  const reps = parseInt(document.getElementById('reps').value) || 0;
  const weight = parseInt(document.getElementById('weight').value) || 0;

  if (name && muscleGroup && sets > 0 && reps > 0) {
    if (!data.userProgress[selectedDate]) data.userProgress[selectedDate] = [];
    data.userProgress[selectedDate].push({ name, muscleGroup, tier, sets, reps, weight });
    localStorage.setItem('fitnessData', JSON.stringify(data));

    if (mode === 'select') {
      document.getElementById('muscleGroup').value = '';
      document.getElementById('tier').value = '';
      document.getElementById('exerciseNameSelect').value = '';
    } else {
      document.getElementById('exerciseNameManual').value = '';
      document.getElementById('muscleGroupManual').value = '';
    }
    document.getElementById('sets').value = '';
    document.getElementById('reps').value = '';
    document.getElementById('weight').value = '';
    updateTierList();

    loadCalendar();
    loadWorkoutList();
  } else {
    alert('Заполните все поля корректно!');
  }
}

// Отображение списка упражнений
function loadWorkoutList() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const workoutList = document.getElementById('workoutList');
  workoutList.innerHTML = `<h3>Тренировка за ${selectedDate}</h3>`;

  if (data.userProgress[selectedDate] && data.userProgress[selectedDate].length > 0) {
    const groupedExercises = {};
    data.userProgress[selectedDate].forEach(ex => {
      if (!groupedExercises[ex.muscleGroup]) groupedExercises[ex.muscleGroup] = [];
      groupedExercises[ex.muscleGroup].push(ex);
    });

    workoutList.innerHTML += '<div>';
    for (const group in groupedExercises) {
      workoutList.innerHTML += `<div class="workout-group"><h4>${group}</h4>`;
      groupedExercises[group].forEach((ex, index) => {
        workoutList.innerHTML += `
          <div class="workout-item" id="exercise-${group}-${index}">
            <span class="exercise-name">${ex.name} (${ex.tier})</span>
            <span>${ex.sets} подходов x ${ex.reps} повторений x ${ex.weight} кг</span>
            <button onclick="editExercise('${group}', ${index})">Редактировать</button>
            <button onclick="deleteExercise('${group}', ${index})">Удалить</button>
          </div>
        `;
      });
      workoutList.innerHTML += '</div>';
    }
    workoutList.innerHTML += '</div>';
  } else {
    workoutList.innerHTML += '<p>Нет упражнений за эту дату.</p>';
  }
}

// Удаление упражнения
function deleteExercise(group, index) {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  if (data.userProgress[selectedDate]) {
    const groupExercises = data.userProgress[selectedDate].filter(ex => ex.muscleGroup === group);
    groupExercises.splice(index, 1);
    data.userProgress[selectedDate] = data.userProgress[selectedDate].filter(ex => ex.muscleGroup !== group).concat(groupExercises);
    if (data.userProgress[selectedDate].length === 0) delete data.userProgress[selectedDate];
    localStorage.setItem('fitnessData', JSON.stringify(data));
    loadCalendar();
    loadWorkoutList();
  }
}

// Редактирование упражнения
function editExercise(group, index) {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const groupExercises = data.userProgress[selectedDate].filter(ex => ex.muscleGroup === group);
  const exercise = groupExercises[index];

  if (exercise.tier === 'Custom') {
    document.querySelector('input[name="exerciseMode"][value="manual"]').checked = true;
    toggleExerciseMode();
    document.getElementById('exerciseNameManual').value = exercise.name;
    document.getElementById('muscleGroupManual').value = exercise.muscleGroup;
  } else {
    document.querySelector('input[name="exerciseMode"][value="select"]').checked = true;
    toggleExerciseMode();
    document.getElementById('muscleGroup').value = exercise.muscleGroup;
    updateTierList();
    document.getElementById('tier').value = exercise.tier;
    updateExerciseList();
    document.getElementById('exerciseNameSelect').value = exercise.name;
  }

  document.getElementById('sets').value = exercise.sets;
  document.getElementById('reps').value = exercise.reps;
  document.getElementById('weight').value = exercise.weight;

  groupExercises.splice(index, 1);
  data.userProgress[selectedDate] = data.userProgress[selectedDate].filter(ex => ex.muscleGroup !== group).concat(groupExercises);
  localStorage.setItem('fitnessData', JSON.stringify(data));
  loadWorkoutList();
}

// Управление планами тренировок
let currentPlanExercises = [];
let isEditingPlan = false;

function openPlanModal() {
  const modal = document.getElementById('planModal');
  modal.style.display = 'flex';
  currentPlanExercises = [];
  isEditingPlan = false;
  document.getElementById('planName').value = '';
  document.getElementById('planMuscleGroup').value = '';
  document.getElementById('planExerciseList').innerHTML = '';
  togglePlanMode();
}

function closePlanModal() {
  document.getElementById('planModal').style.display = 'none';
}

function togglePlanMode() {
  const mode = document.querySelector('input[name="planMode"]:checked').value;
  document.getElementById('planSelectMode').style.display = mode === 'select' ? 'block' : 'none';
  document.getElementById('planManualMode').style.display = mode === 'manual' ? 'block' : 'none';
  updatePlanExerciseList();
}

function updatePlanExerciseList() {
  const muscleGroup = document.getElementById('planMuscleGroup').value;
  const tier = document.getElementById('planTier').value;
  const exerciseSelect = document.getElementById('planExerciseName');

  exerciseSelect.innerHTML = '<option value="" disabled selected>Упражнение</option>';
  exerciseSelect.disabled = !tier || !muscleGroup;

  if (muscleGroup && tier) {
    const exercises = exerciseData[muscleGroup][tier];
    exercises.forEach(ex => exerciseSelect.innerHTML += `<option value="${ex}">${ex}</option>`);
    exerciseSelect.disabled = false;
  }
}

function addExerciseToPlan() {
  const name = document.getElementById('planExerciseName').value;
  const muscleGroup = document.getElementById('planMuscleGroup').value;
  const tier = document.getElementById('planTier').value;
  const sets = parseInt(document.getElementById('planSets').value) || 0;
  const reps = parseInt(document.getElementById('planReps').value) || 0;
  const weight = parseInt(document.getElementById('planWeight').value) || 0;

  if (name && muscleGroup && tier) {
    currentPlanExercises.push({ name, muscleGroup, tier, sets, reps, weight });
    updatePlanExerciseListDisplay();
    document.getElementById('planTier').value = '';
    document.getElementById('planExerciseName').value = '';
    document.getElementById('planSets').value = '0';
    document.getElementById('planReps').value = '0';
    document.getElementById('planWeight').value = '0';
  } else {
    alert('Выберите упражнение для плана!');
  }
}

function addManualExerciseToPlan() {
  const name = document.getElementById('manualPlanExerciseName').value;
  const muscleGroup = document.getElementById('planMuscleGroup').value;
  const sets = parseInt(document.getElementById('manualPlanSets').value) || 0;
  const reps = parseInt(document.getElementById('manualPlanReps').value) || 0;
  const weight = parseInt(document.getElementById('manualPlanWeight').value) || 0;

  if (name && muscleGroup) {
    currentPlanExercises.push({ name, muscleGroup, tier: 'Custom', sets, reps, weight });
    updatePlanExerciseListDisplay();
    document.getElementById('manualPlanExerciseName').value = '';
    document.getElementById('manualPlanSets').value = '0';
    document.getElementById('manualPlanReps').value = '0';
    document.getElementById('manualPlanWeight').value = '0';
  } else {
    alert('Введите название упражнения и выберите группу мышц!');
  }
}

function updatePlanExerciseListDisplay() {
  const list = document.getElementById('planExerciseList');
  list.innerHTML = '';
  currentPlanExercises.forEach((ex, index) => {
    list.innerHTML += `
      <li>
        ${ex.name} (${ex.tier}) - ${ex.sets} подх. x ${ex.reps} повт. x ${ex.weight} кг
        <button onclick="editExerciseInPlan(${index})">Ред.</button>
        <button onclick="removeExerciseFromPlan(${index})">Удалить</button>
      </li>`;
  });
}

function removeExerciseFromPlan(index) {
  currentPlanExercises.splice(index, 1);
  updatePlanExerciseListDisplay();
}

function editExerciseInPlan(index) {
  const ex = currentPlanExercises[index];
  if (ex.tier === 'Custom') {
    document.querySelector('input[name="planMode"][value="manual"]').checked = true;
    togglePlanMode();
    document.getElementById('manualPlanExerciseName').value = ex.name;
    document.getElementById('manualPlanSets').value = ex.sets;
    document.getElementById('manualPlanReps').value = ex.reps;
    document.getElementById('manualPlanWeight').value = ex.weight;
  } else {
    document.querySelector('input[name="planMode"][value="select"]').checked = true;
    togglePlanMode();
    document.getElementById('planMuscleGroup').value = ex.muscleGroup;
    updatePlanExerciseList();
    document.getElementById('planTier').value = ex.tier;
    updatePlanExerciseList();
    document.getElementById('planExerciseName').value = ex.name;
    document.getElementById('planSets').value = ex.sets;
    document.getElementById('planReps').value = ex.reps;
    document.getElementById('planWeight').value = ex.weight;
  }
  currentPlanExercises.splice(index, 1);
  updatePlanExerciseListDisplay();
}

function savePlan() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const planName = document.getElementById('planName').value.trim();

  if (!data.trainingPlans) data.trainingPlans = {};

  if (planName && currentPlanExercises.length > 0) {
    data.trainingPlans[planName] = currentPlanExercises;
    localStorage.setItem('fitnessData', JSON.stringify(data));
    closePlanModal();
    loadPlans();
  } else {
    alert('Введите название плана и добавьте хотя бы одно упражнение!');
  }
}

function loadPlans() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const planSelect = document.getElementById('planSelect');
  planSelect.innerHTML = '<option value="" selected>Выберите готовый план</option>';

  if (data.trainingPlans) {
    for (const planName in data.trainingPlans) {
      planSelect.innerHTML += `<option value="${planName}">${planName}</option>`;
    }
  }
}

function loadPlanExercises() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const planName = document.getElementById('planSelect').value;

  if (planName && data.trainingPlans[planName]) {
    const exercises = data.trainingPlans[planName];
    if (!data.userProgress[selectedDate]) data.userProgress[selectedDate] = [];

    exercises.forEach(ex => {
      data.userProgress[selectedDate].push({ ...ex });
    });

    localStorage.setItem('fitnessData', JSON.stringify(data));
    loadWorkoutList();
  }
}

// Новые функции для управления списком планов
function openPlansListModal() {
  const modal = document.getElementById('plansListModal');
  modal.style.display = 'flex';
  loadPlansList();
}

function closePlansListModal() {
  document.getElementById('plansListModal').style.display = 'none';
}

function loadPlansList() {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  const plansList = document.getElementById('plansList');
  plansList.innerHTML = '';

  if (data.trainingPlans && Object.keys(data.trainingPlans).length > 0) {
    for (const planName in data.trainingPlans) {
      const muscleGroup = data.trainingPlans[planName][0].muscleGroup || 'Не указана';
      plansList.innerHTML += `
        <li>
          ${planName} (Тег: ${muscleGroup})
          <button onclick="editPlanFromList('${planName}')">Редактировать</button>
          <button onclick="deletePlanFromList('${planName}')">Удалить</button>
        </li>`;
    }
  } else {
    plansList.innerHTML = '<li>Нет сохранённых планов.</li>';
  }
}

function editPlanFromList(planName) {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  if (data.trainingPlans[planName]) {
    currentPlanExercises = [...data.trainingPlans[planName]];
    isEditingPlan = true;
    document.getElementById('planName').value = planName;
    document.getElementById('planMuscleGroup').value = currentPlanExercises[0].muscleGroup || '';
    updatePlanExerciseListDisplay();
    closePlansListModal();
    document.getElementById('planModal').style.display = 'flex';
  }
}

function deletePlanFromList(planName) {
  const data = JSON.parse(localStorage.getItem('fitnessData'));
  if (data.trainingPlans[planName]) {
    if (confirm(`Вы уверены, что хотите удалить план "${planName}"?`)) {
      delete data.trainingPlans[planName];
      localStorage.setItem('fitnessData', JSON.stringify(data));
      loadPlansList();
      loadPlans();
    }
  }
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