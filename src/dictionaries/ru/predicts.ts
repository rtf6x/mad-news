export default [
  { message: '[ПЬЯНЫЙ] [МУЖЧИНА]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [МУЖЧИНА] из [ГОРОДА]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [МУЖЧИНА] из [ГОРОДА], [СТРЕЛЯВШИЙ]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [МУЖЧИНА] из [ГОРОДА], [РАСЧЛЕНИВШИЙ] [ЖЕРТВУ]', sex: 'male' },
  { message: '[ШКОЛЬНИК]', sex: 'male' },
  { message: '[ШКОЛЬНИК] из [ГОРОДА]', sex: 'male' },
  { message: 'В [ГОРОДЕ] [ПЬЯНЫЙ] [МУЖЧИНА]', sex: 'male' },
  { message: 'В [ГОРОДЕ] [ШКОЛЬНИК]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [ЖИТЕЛЬ] [ГОРОДА]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [ОМИЧ]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [ОМИЧ], [СТРЕЛЯВШИЙ]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [ОМИЧ], [РАСЧЛЕНИВШИЙ] [ЖЕРТВУ]', sex: 'male' },
  { message: '[ПЬЯНЫЙ] [ОМИЧ] [С_ПРЕДМЕТОМ]', sex: 'male' },
  { message: '[МУЖЧИНА]', sex: 'male' },
  { message: '[ШКОЛЬНИК]', sex: 'male' },

  { message: '[ПЬЯНАЯ] [ЖЕНЩИНА]', sex: 'female' },
  { message: '[ПЬЯНАЯ] [ЖЕНЩИНА] из [ГОРОДА]', sex: 'female' },
  { message: '[ШКОЛЬНИЦА]', sex: 'female' }, // иногда не сходится со второй фразой, например "НЕ ПУСТИЛА МУЖА НА РЫБАЛКУ"
  { message: '[ШКОЛЬНИЦА] из [ГОРОДА]', sex: 'female' },
  { message: 'В [ГОРОДЕ] [ПЬЯНАЯ] [ЖЕНЩИНА]', sex: 'female' },
  { message: 'В [ГОРОДЕ] [ШКОЛЬНИЦА]', sex: 'female' },
  { message: '[ПЬЯНАЯ] [ЖИТЕЛЬНИЦА] [ГОРОДА]', sex: 'female' },
  { message: '[ЖЕНЩИНА]', sex: 'female' },
  { message: '[ШКОЛЬНИЦА]', sex: 'female' },

  { message: '[ЛЮДИ]', sex: 'plural' },
  { message: '[ЖЕНЩИНЫ]', sex: 'plural' },
  { message: '[ОДНА_ПЛЮС_ОДНА]', sex: 'plural' },
  { message: '[ДВА] студента [ВУЗА]', sex: 'plural' },
  { message: '[ПЬЯНЫЕ] [ЖИТЕЛИ] [ГОРОДА]', sex: 'plural' },
  { message: 'В [ГОРОДЕ] [ДВЕ] [ШКОЛЬНИЦЫ]', sex: 'plural' },
  { message: 'В [ГОРОДЕ] [ПЬЯНЫЕ] [ЛЮДИ]', sex: 'plural' },
  { message: 'В [ГОРОДЕ] [ДВЕ] [ПЬЯНЫЕ] [ЖЕНЩИНЫ]', sex: 'plural' },
  { message: '[ДВЕ] [ШКОЛЬНИЦЫ]', sex: 'plural' },
  { message: '[ПЬЯНЫЕ] [ЛЮДИ]', sex: 'plural' },
  { message: '[ДВЕ] [ПЬЯНЫЕ] [ЖЕНЩИНЫ]', sex: 'plural' },
  { message: '[ПЬЯНЫЕ] [ЛЮДИ] из [ГОРОДА]', sex: 'plural' },
  { message: '[ДВЕ] [ПЬЯНЫЕ] [ЖЕНЩИНЫ] из [ГОРОДА]', sex: 'plural' },
  { message: '[ДВЕ] [ШКОЛЬНИЦЫ] из [ГОРОДА]', sex: 'plural' },
  { message: 'В [ГОРОДЕ] [ГРУППА_МУЖЧИН]', sex: 'plural' },
];
