const currentLocation = document.location.pathname;
// console.log(document.location.pathname)

if (currentLocation == '/project_lift/repository/layout/'){
    document.querySelector('head title').innerText = 'Лифт в будущее – образовательная онлайн-платформа. Проект Благотворительного фонда «Система»';
    document.querySelector('head meta[name="description"]').setAttribute('content', 'Бесплатная образовательная программа, которая призвана помочь в выборе профессии, прокачать скилы и устроиться на работу.');
    document.querySelector('head meta[name="robots"]').setAttribute('content', 'index, nofollow');
}
else if (currentLocation == '/project_lift/repository/layout/courses.html'){
    document.querySelector('head title').innerText = 'Лифт в будущее – образовательная онлайн-платформа. Прокачай скилы!';
    document.querySelector('head meta[name="description"]').setAttribute('content', 'Получай знания и навыки и применяй их на практике. Больше активности на платформе - больше шансов, что на тебя обратят внимание.');
    document.querySelector('head meta[name="robots"]').setAttribute('content', 'index, nofollow');
}
else if (currentLocation == '/project_lift/repository/layout/career.html'){
    document.querySelector('head title').innerText = 'Лифт в будущее – образовательная онлайн-платформа. Найди себя!';
    document.querySelector('head meta[name="description"]').setAttribute('content', 'Хочешь лучше понять себя и найти профессию, которая тебе подходит? Интересуешься многим, но не можешь выбрать? Мы предложим подходящее направление, поможем расставить приоритеты, порекомендуем необходимые занятия, и правильный выбор будет очевиден!');
    document.querySelector('head meta[name="robots"]').setAttribute('content', 'index, nofollow');
}
else if (currentLocation == '/project_lift/repository/layout/vacancies.html'){
    document.querySelector('head title').innerText = 'Лифт в будущее – образовательная онлайн-платформа. Найди работу, практику или стажировку!';
    document.querySelector('head meta[name="description"]').setAttribute('content', 'Проходи стажировки, выбирай вакансии, прокачайся в профессии и стань востребованным специалистом!');
    document.querySelector('head meta[name="robots"]').setAttribute('content', 'index, nofollow');
}