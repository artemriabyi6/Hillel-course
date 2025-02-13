# 1. addEventListener(event, listener, options)

 - event (обов’язковий) – строка, що вказує тип події, на яку слід реагувати, наприклад, 'click', 'submit', 'keydown' тощо.

 - listener (обов’язковий) – функція, яка викликається при виникненні події. Зазвичай це функція, яка виконує певні дії у відповідь на  подію.

 - options (необов’язковий) – об’єкт або булеве значення, що налаштовує поведінку обробника подій. Якщо використовується булеве значення, воно представляє опцію capture. Якщо переданий об’єкт, він може містити кілька властивостей:

capture (тип: Boolean) – визначає фазу події, на якій виконується обробник. За замовчуванням false, тобто обробник спрацює на фазі "вниз" (bubbling). Якщо встановити true, обробник буде реагувати на фазі "вгору" (capturing).

once (тип: Boolean) – якщо true, обробник виконається лише один раз, після чого буде автоматично видалений.

passive (тип: Boolean) – якщо true, означає, що обробник подій не викликає методи, які можуть перервати подію, наприклад, event.preventDefault(). Це може підвищити продуктивність у випадках, коли скасування події не потрібне (наприклад, для прокрутки на мобільних пристроях).




# 2. Capturing & bubbling

У JavaScript процес поширення подій через DOM має дві основні фази: capturing (захоплення) і bubbling (спливання). Ці фази визначають порядок, у якому викликаються обробники подій, пов'язані з різними елементами.

Фази поширення події:

- __Capturing (Захоплення)__
Подія починає свій шлях з кореневого елемента документа (document або window) і спускається до цільового елемента, по черзі проходячи через усі його батьківські елементи.
Під час цієї фази викликаються обробники подій, які були додані з параметром capture: true.


- __Target (Ціль):__
Це етап, коли подія досягає цільового елемента, на якому вона фактично відбулася.
Обробники, які додані без capture: true, спрацюють на фазі спливання, якщо вони не зупинені.


- __Bubbling (Спливання):__
Після досягнення цільового елемента подія починає "спливати" назад вгору через батьківські елементи до кореневого елемента.
Під час цієї фази викликаються обробники подій, додані з параметром capture: false (або без нього, оскільки це значення за замовчуванням).




__Зупинка події на певному етапі:__ 


Якщо вам потрібно зупинити подію на якомусь етапі, можна скористатися методами event.stopPropagation() або event.stopImmediatePropagation():

 - event.stopPropagation() – зупиняє подію від подальшого поширення на батьківські елементи.

 - event.stopImmediatePropagation() – зупиняє подію і не дозволяє викликати інші обробники на тому ж елементі.



__Коли використовувати фазу захоплення або спливання:__

Capturing корисний, коли ви хочете "перехопити" подію до її обробки цільовим елементом або його дочірніми елементами.
Bubbling використовується за замовчуванням і найчастіше застосовується для делегування подій, коли обробник на вищому елементі (батьківському) обробляє події на дочірніх елементах.__





# 3. Event delegation

Event Delegation (делегування подій) – це техніка обробки подій в JavaScript, коли замість додавання обробників подій на кожен дочірній елемент окремо, ми додаємо один обробник події на спільний батьківський елемент. Цей обробник перехоплює події, що відбуваються на дочірніх елементах, завдяки механізму bubbling (спливання подій).

Як це працює?
Завдяки фазі спливання подія, що відбулася на дочірньому елементі, "спливає" вгору до батьківських елементів. Використовуючи делегування подій, ми можемо поставити один обробник на батьківський елемент і відстежувати події на будь-яких дочірніх елементах, визначаючи, на якому саме з них сталася подія.

Переваги делегування подій:

 - Менше обробників подій: Замість того, щоб додавати обробник для кожного елемента, ми можемо додати один обробник на батьківський елемент.

 - Динамічний обробник: Дозволяє обробляти події на елементах, які створюються динамічно (наприклад, нові елементи, додані в DOM після 
 завантаження сторінки).

 - Оптимізація пам'яті: Використовується менше пам’яті, оскільки менше обробників подій зберігається в пам'яті.


 __Де використовується делегування подій?__

Делегування подій добре підходить для:

 - Списків елементів (наприклад, списків товарів, меню).

 - Таблиць, коли потрібно обробити подію для кожного рядка або комірки.

 - Кнопок або інших елементів інтерфейсу, які створюються динамічно.




# 4. e.preventDefault()

e.preventDefault() — це метод об'єкта події e в JavaScript, який скасовує стандартну дію браузера для певної події. Застосовується, коли потрібно запобігти типовій поведінці елемента при настанні події.