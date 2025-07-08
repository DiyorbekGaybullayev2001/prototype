document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    if (window.location.pathname.includes("about.html") && params.get("from") === "index") {
        const loginBtn = document.querySelector('a[href="./login.html"]');
        const registerBtn = document.querySelector('a[href="./registration.html"]');
        const subscriptionBtn = document.querySelector('a[href="./subscription.html"]');
        const accessBtn = document.querySelector('a[href="/index.html"]');

        if (loginBtn) loginBtn.classList.remove("hidden");
        if (registerBtn) registerBtn.classList.remove("hidden");
        if (subscriptionBtn) subscriptionBtn.classList.add("hidden");

        if (accessBtn) {
            function toggleAccessBtn() {
                if (window.innerWidth < 1000) {
                    accessBtn.classList.remove("hidden");
                } else {
                    accessBtn.classList.add("hidden");
                }
            }

            toggleAccessBtn();
            window.addEventListener("resize", toggleAccessBtn);
        }
    }
});




document.addEventListener('DOMContentLoaded', (event) => {
    const showAllProjectsButton = document.getElementById('showAllProjectsButton');
    const h3Project = document.getElementById('h3Project');
    const cards = document.querySelector('.cards-2');
    const cardElements = document.querySelectorAll('.card-2');
    const cards2 = document.querySelector('.cards');

    if (showAllProjectsButton && h3Project && cards && cardElements.length > 0) {
        showAllProjectsButton.addEventListener('click', () => {
            if (cards.classList.contains('cards-vert')) {
                cards.classList.remove('cards-vert');
                cardElements.forEach((card, index) => {
                    card.classList.remove('card-full');
                    card.style.backgroundImage = `url(../../image/project-${index + 1}.png)`;
                    const paragraphs = card.querySelectorAll('p');
                    if (paragraphs.length > 2) {
                        paragraphs[2].classList.remove('hidden');
                        paragraphs[1].classList.remove('hidden');
                    }
                });
                showAllProjectsButton.textContent = 'Все проекты в работе';
                h3Project.textContent = 'Проекты в работе';
            } else {
                cards.classList.add('cards-vert');
                cardElements.forEach((card, index) => {
                    card.classList.add('card-full');
                    card.style.backgroundImage = `url(../../image/project-${index + 1}-full.png)`;
                    const paragraphs = card.querySelectorAll('p');
                    if (paragraphs.length > 2) {
                        paragraphs[2].classList.add('hidden');
                        paragraphs[1].classList.add('hidden');
                    }
                });
                showAllProjectsButton.textContent = 'Проекты в работе';
                h3Project.textContent = 'Все проекты в работе';
            }
        });
    }

    const showAllEndedProjectsButton = document.getElementById('showAllEndedProjectsButton');
    const h3EndedProject = document.getElementById('h3EndedProject');

    if (showAllEndedProjectsButton && h3EndedProject && cards && cardElements.length > 0) {
        showAllEndedProjectsButton.addEventListener('click', () => {
            if (cards.classList.contains('cards-vert')) {
                cards.classList.remove('cards-vert');
                cardElements.forEach((card, index) => {
                    card.classList.remove('card-full');
                    card.style.backgroundImage = `url(../../image/project-${index + 1}.png)`;
                    const paragraphs = card.querySelectorAll('p');
                    if (paragraphs.length > 2) {
                        paragraphs[2].classList.remove('hidden');
                        paragraphs[1].classList.remove('hidden');
                    }
                });
                showAllEndedProjectsButton.textContent = 'Все завершенные проекты';
                h3EndedProject.textContent = 'Завершенные';
            } else {
                cards.classList.add('cards-vert');
                cardElements.forEach((card, index) => {
                    card.classList.add('card-full');
                    card.style.backgroundImage = `url(../../image/project-${index + 1}-full.png)`;
                    const paragraphs = card.querySelectorAll('p');
                    if (paragraphs.length > 2) {
                        paragraphs[2].classList.add('hidden');
                        paragraphs[1].classList.add('hidden');
                    }
                });
                showAllEndedProjectsButton.textContent = 'Завершенные проекты';
                h3EndedProject.textContent = 'Все завершенные работы';
            }
        });
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const showModalBtn = document.getElementById('showModalBtn');
//     const contextMenu = document.getElementById('contextMenu');
//     const overlay = document.getElementById('overlay');

//     if (showModalBtn) {
//         showModalBtn.addEventListener('click', () => {
//             contextMenu.classList.toggle('hidden');
//             overlay.classList.toggle('hidden');
//             const buttonRect = showModalBtn.getBoundingClientRect();
//             contextMenu.style.top = `${buttonRect.top + 90 + window.scrollY}px`;
//             contextMenu.style.left = `${buttonRect.left + 60 - contextMenu.offsetWidth}px`;
//         });
//     } else {
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('imageUpload');

    if (imageUpload) {
        imageUpload.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('previewImage').src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    } else {
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fullTarif = document.getElementById('full-tarif');
    const fullCards = document.getElementById('full-cards');
    const selectTariffButtons = document.querySelectorAll('.select-tariff-btn');
    const showTariffsButton = document.getElementById('show-tariffs-btn');

    selectTariffButtons.forEach(button => {
        button.addEventListener('click', () => {
            fullTarif.style.display = 'none';
            fullCards.style.display = 'flex';
        });
    });

    if (showTariffsButton) { // Check if the element was found!
        showTariffsButton.addEventListener('click', () => {
            if (fullCards) fullCards.style.display = 'none';
            if (fullTarif) fullTarif.style.display = 'block';
        });
    } else {
    }

})


function togglePanel(element) {
    const content = element.nextElementSibling;
    const img = element.querySelector('img');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        img.classList.add('rotate-270');
    } else {
        content.classList.add('hidden');
        img.classList.remove('rotate-270');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#add-card-btn').forEach(button => {
        button.addEventListener('click', function () {
            document.getElementById('modal')?.classList.remove('hidden');
        });
    });

    const cardNumberInput = document.getElementById('card-number');
    const cardExpiryInput = document.getElementById('card-expiry');

    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function () {
            let value = this.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
            value = value.replace(/(.{4})/g, '$1 ').trim(); // Добавляем пробел каждые 4 цифры
            this.value = value;
        });
    }

    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', function () {
            let value = this.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4); // Вставляем '/'
            }
            this.value = value;
        });
    }

    const saveCardBtn = document.getElementById('save-card');
    if (saveCardBtn) {
        saveCardBtn.addEventListener('click', function () {
            if (!cardNumberInput || !cardExpiryInput) {
                console.error("Один из элементов ввода не найден!");
                return;
            }

            const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Убираем пробелы перед валидацией
            const cardExpiry = cardExpiryInput.value.trim();

            console.log("Номер карты:", cardNumber);
            console.log("Срок действия:", cardExpiry);

            if (cardNumber.length === 16 && /^\d{2}\/\d{2}$/.test(cardExpiry)) {
                const cardLast4 = document.getElementById('card-last4');
                if (cardLast4) {
                    cardLast4.textContent = cardNumber.slice(-4);
                }

                const cardExpiryDisplay = document.getElementById('card-expiryy');
                if (cardExpiryDisplay) {
                    cardExpiryDisplay.textContent = cardExpiry;
                }

                document.getElementById('no-linked')?.classList.add('hidden');
                document.getElementById('linked')?.classList.remove('hidden');
                document.getElementById('modal')?.classList.add('hidden');
            } else {
                alert('Введите корректные данные карты.');
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('#auto-pay');
    const subscriptionBlock = document.querySelector('#auto-payBlock'); // Ссылка внутри блока

    if (!toggleButton) {
        return;
    }

    function updateButtonState(isAutoPayEnabled) {
        console.log('Состояние автоплатежа: ', isAutoPayEnabled);

        if (isAutoPayEnabled) {
            toggleButton.textContent = "Отключить автоплатеж";
            toggleButton.classList.remove('bg-white', 'border-0', 'text-black');
            toggleButton.classList.add('bg-transparent', 'border-2', 'text-white');
            if (subscriptionBlock) {
                subscriptionBlock.textContent = 'Отключить';
            }
        } else {
            toggleButton.textContent = "Подключить автоплатеж";
            toggleButton.classList.remove('bg-transparent', 'border-2', 'text-white');
            toggleButton.classList.add('bg-white', 'border-0', 'text-black');
            if (subscriptionBlock) {
                subscriptionBlock.textContent = 'Подключить';
            }
        }
    }

    toggleButton.addEventListener('click', function () {
        let isAutoPayEnabled = localStorage.getItem('autoPayEnabled') === 'true';
        isAutoPayEnabled = !isAutoPayEnabled;

        localStorage.setItem('autoPayEnabled', isAutoPayEnabled);
        console.log('Состояние после клика: ', isAutoPayEnabled);
        updateButtonState(isAutoPayEnabled);
    });

    if (subscriptionBlock) {
        subscriptionBlock.addEventListener('click', function () {
            let isAutoPayEnabled = localStorage.getItem('autoPayEnabled') === 'true';
            isAutoPayEnabled = !isAutoPayEnabled;

            localStorage.setItem('autoPayEnabled', isAutoPayEnabled);
            console.log('Состояние после клика на блок: ', isAutoPayEnabled);
            updateButtonState(isAutoPayEnabled);
        });
    }

    const savedState = localStorage.getItem('autoPayEnabled') === 'true';
    console.log('Сохраненное состояние при загрузке: ', savedState);
    updateButtonState(savedState);
});







function adjustHeight() {
    const inputDiv = document.getElementById("textInput");
    const container = document.getElementById("textContainer");
    container.style.height = "auto";
    container.style.height = Math.max(420, inputDiv.scrollHeight) + "px";
}

function togglePlaceholder() {
    const inputDiv = document.getElementById("textInput");
    const placeholder = document.getElementById("placeholder");

    if (inputDiv.textContent.trim().length > 0) {
        placeholder.style.display = "none";
    } else {
        placeholder.style.display = "block";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const showContextBtn = document.getElementById('showContextBtn');
    const contextMenu = document.getElementById('contextMenu-2');
    const overlay = document.getElementById('overlay-2');

    if (showContextBtn && contextMenu && overlay) { // Проверка на null
        showContextBtn.addEventListener('click', () => {
            const isHidden = contextMenu.classList.contains('hidden');

            contextMenu.classList.toggle('hidden');
            overlay.classList.toggle('hidden');

            if (isHidden) {
                showContextBtn.style.zIndex = '1002';
            } else {
                showContextBtn.style.zIndex = '';
            }

            const buttonRect = showContextBtn.getBoundingClientRect();
            contextMenu.style.top = `${buttonRect.top + showContextBtn.offsetHeight + 10 + window.scrollY}px`; // Чуть ниже кнопки
            contextMenu.style.left = `${buttonRect.left + showContextBtn.offsetWidth - contextMenu.offsetWidth}px`; // Справа от кнопки
        });

        overlay.addEventListener('click', () => {
            contextMenu.classList.add('hidden');
            overlay.classList.add('hidden');
            showContextBtn.style.zIndex = '';
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("messageInput");

    if (textarea) {
        textarea.addEventListener("input", () => {
            textarea.style.height = "40px"; // Сбрасываем высоту
            let newHeight = textarea.scrollHeight;
            textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px"; // Увеличиваем, но не более 200px
            if (newHeight > 150) {
                newHeight = 150;
                textarea.classList.add("scrollable");
            } else {
                textarea.classList.remove("scrollable");
            }
        });
    } else {
    }
})



document.addEventListener("DOMContentLoaded", function () {
    const allChatsButton = document.getElementById("all-chats");

    if (allChatsButton) {
        allChatsButton.addEventListener("click", function () {
            document.querySelectorAll(".message").forEach(message => {
                message.classList.add("select"); // Добавляем класс select к каждому сообщению
                let selectDot = message.querySelector("#select-dot"); // Ищем точку в сообщении
                if (selectDot) {
                    selectDot.classList.remove("hidden"); // Убираем скрытие точек
                    selectDot.style.backgroundColor = "transparent"; // Устанавливаем прозрачный цвет
                    selectDot.addEventListener("click", function () {
                        if (selectDot.classList.contains("active")) {
                            selectDot.classList.remove("active");
                            selectDot.style.backgroundColor = "transparent"; // Возвращаем прозрачный цвет
                        } else {
                            selectDot.classList.add("active");
                            selectDot.style.backgroundColor = "#4CAF50"; // Меняем на активный цвет
                        }
                    });
                }
            });

            document.getElementById("contextMenu").classList.add("hidden");
            document.getElementById("overlay").classList.add("hidden");
        });
    } else {
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const cancelButton = document.getElementById("cancel");

    if (cancelButton) {
        cancelButton.addEventListener("click", function () {
            document.querySelectorAll(".message").forEach(message => {
                message.classList.remove("select"); // Убираем класс select с сообщений
                let selectDot = message.querySelector("#select-dot");
                if (selectDot) {
                    selectDot.classList.add("hidden"); // Скрываем точку
                    selectDot.style.backgroundColor = ""; // Сбрасываем цвет
                    selectDot.removeEventListener("click", changeDotColor); // Удаляем обработчик клика
                }
            });

            document.getElementById("contextMenu").classList.add("hidden");
            document.getElementById("overlay").classList.add("hidden");
        });
    } else {
    }
});


function changeDotColor() {
    let selectDot = this;
    if (selectDot.classList.contains("active")) {
        selectDot.classList.remove("active");
    } else {
        selectDot.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const messages = document.querySelectorAll(".message");
    const messageContainer = document.querySelectorAll(".chat-container");
    const messagesContainer = document.getElementById("messages");
    const inputBox = document.getElementById("inputBox");
    const contextMenu = document.getElementById("contextMenu");
    const overlay = document.getElementById("overlay");
    const selectBtn = document.getElementById("select");
    const cancelBtn = document.getElementById("cancel");
    const allChatsBtn = document.getElementById("all-chats");
    const deleteBtn = document.getElementById("delete");
    const menuItems = document.querySelectorAll(".menu-item");

    let activeMessage = null; // Для контекстного меню
    let selectMode = false;   // Режим выбора чатов

    const chatData = {
        0: `
            <span class="mx-auto relative transform scale-[0.93] flex items-center max-w-[150px] justify-center font-semibold text-[18px] py-[10px] px-[20px] rounded-[30px] bg-[#E4E4E4]">25.11.2024</span>
            <div class="person-message transform scale-[0.93] flex items-center gap-[25px]">
                <img src="/image/avatar.png" alt="">
                <div class="person-title relative bg-white p-[20px_80px_20px_40px] rounded-[30px]">
                    <h3 class="text-[#EDDA9F] font-bold text-[20px] leading-[30px]">Иван</h3>
                    <p class="text-[#404040] font-bold text-[16px] leading-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <h6 class="time absolute right-[25px] bottom-[5px] font-bold text-[16px] leading-[30px] text-[#959595]">
                        16:33
                    </h6>
                </div>
            </div>
            <span class="mx-auto transform scale-[0.93] flex items-center max-w-[150px] justify-center font-semibold text-[18px] py-[10px] px-[20px] rounded-[30px] bg-[#E4E4E4]">
                Вчера
            </span>
            <div class="user-message transform scale-[0.93] flex items-end gap-[25px]">
                <div class="user-title relative bg-white p-[20px_80px_20px_40px] rounded-[30px]">
                    <h3 class="text-[#EDDA9F] font-bold text-[20px] leading-[30px]">Иван</h3>
                    <p class="text-[#404040] font-bold text-[16px] leading-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, quas?
                    </p>
                    <h6 class="time absolute right-[25px] bottom-[5px] font-bold text-[16px] leading-[30px] text-[#959595]">
                        16:33
                    </h6>
                </div>
                <img src="/image/person-img.png" alt="">
            </div>
            <div class="tips flex flex-col gap-[15px] transform scale-[0.93]">
                <div class="tips-message cursor-pointer flex justify-end rounded-[30px] w-fit p-[10px_35px_10px_35px] bg-[#2B2E3A] text-white font-bold text-[18px] leading-[30px] text-align-right ml-auto">
                    Привет
                </div>
                <div class="tips-message cursor-pointer flex justify-end rounded-[30px] w-fit p-[10px_35px_10px_35px] bg-[#2B2E3A] text-white font-bold text-[18px] leading-[30px] text-align-right ml-auto">
                    Как дела?
                </div>
                <div class="tips-message cursor-pointer flex justify-end rounded-[30px] w-fit p-[10px_35px_10px_35px] bg-[#2B2E3A] text-white font-bold text-[18px] leading-[30px] text-align-right ml-auto">
                    Что делаешь?
                </div>
            </div>
        `,
    };



    // Обработчик клика по сообщению
    messages.forEach((message, index) => {
        message.addEventListener("click", function () {
            if (selectMode) {
                this.classList.toggle("active");
            } else {
                messages.forEach(msg => msg.classList.remove("active"));
                this.classList.add("active");
                inputBox.classList.remove("hidden");
                messagesContainer.innerHTML = chatData[index] || "<p class='text-center text-gray-500 text-[28px]'>Чат пуст</p>";
            }
            let selectDot = this.querySelector("#select-dot");
            let dotsImg = this.querySelector("#dot-image");

            if (selectDot && dotsImg) {
                if (this.classList.contains("active")) {
                    selectDot.style.backgroundColor = "#4CAF50";
                    selectDot.style.border = "0px solid transparent"; // Устанавливаем бордер
                    dotsImg.classList.remove("hidden"); // Показываем dotsImg
                } else {
                    selectDot.style.backgroundColor = "transparent";
                    selectDot.style.border = "1px solid black"; // Делаем бордер прозрачным
                    dotsImg.classList.add("hidden"); // Скрываем dotsImg
                }
            }

        });

        // Обработчик правого клика (контекстное меню)
        message.addEventListener("contextmenu", function (e) {
            e.preventDefault();

            if (selectMode && this.classList.contains("active")) {
                this.style.zIndex = "1001" ;
            }

            if (activeMessage) {
                activeMessage.style.zIndex = "";
            }
            activeMessage = this;
            overlay.classList.remove("hidden");

            const chatContainer = this.closest(".chat-container"); // Находим контейнер чата
            const rect = chatContainer.getBoundingClientRect(); // Берем координаты контейнера
            const offsetX = rect.right + 20; // Меню всегда справа от контейнера
            const offsetY = rect.top + window.scrollY; // Учитываем прокрутку

            contextMenu.classList.remove("hidden");
            contextMenu.style.top = `${offsetY}px`;
            contextMenu.style.left = `${offsetX}px`;
            this.style.zIndex = "1001";
        });



    });

    document.addEventListener("click", (e) => {
    // Barcha elementlarni tekshiring
    if (contextMenu && overlay && !contextMenu.contains(e.target)) {
        contextMenu.classList.add("hidden");
        overlay.classList.add("hidden");

        if (activeMessage) {
            activeMessage.style.zIndex = "";
            activeMessage = null;
        }
    }
});

//     document.addEventListener("click", (e) => {
//     const contextMenu = document.getElementById("contextMenu"); // yoki querySelector
//     const overlay = document.getElementById("overlay"); // ham tekshirish kerak

//     if (contextMenu && !contextMenu.contains(e.target)) {
//         contextMenu.classList.add("hidden");
//         overlay?.classList.add("hidden"); // agar overlay ham mavjud bo'lmasa, xato bermaydi

//         if (typeof activeMessage !== "undefined" && activeMessage) {
//             activeMessage.style.zIndex = "";
//             activeMessage = null;
//         }
//     }
// });


    // Начальное состояние
    messagesContainer.innerHTML = "<p class='text-center text-gray-500 text-[28px]'>Выберите чат</p>";
    inputBox.classList.add("hidden");
    allChatsBtn.classList.add("hidden");
    cancelBtn.classList.add("hidden");



    // Обработка кнопки "Выбрать" — включение режима выбора
    selectBtn.addEventListener("click", function () {
        allChatsBtn.classList.remove("hidden");
        cancelBtn.classList.remove("hidden");



        menuItems.forEach(item => {
            if (item !== deleteBtn && item !== allChatsBtn && item !== cancelBtn) {
                item.classList.add("hidden");
            }
        });
    });

    // Обработка кнопки "Отменить" — выход из режима выбора и очистка выделений
    cancelBtn.addEventListener("click", function () {
        console.log("cancelBtn CLICKED");
        let dotsImgs = document.querySelectorAll("#dot-image"); // Получаем все элементы
        selectMode = false;

        messages.forEach(message => {
            message.classList.remove("active");
            message.style.zIndex = "";
            let selectDot = message.querySelector("#select-dot");
            if (selectDot) {
                selectDot.style.backgroundColor = "transparent"; // Сбрасываем цвет
                selectDot.style.border = "1px solid black"; // Восстанавливаем бордер
                selectDot.classList.add("hidden"); // Скрываем точку
            }
        });

        // Скрываем все найденные картинки
        dotsImgs.forEach(img => img.classList.add('hidden'));

        activeMessage = null;
        messagesContainer.innerHTML = "<p class='text-center text-gray-500 text-[28px]'>Выберите чат</p>";

        menuItems.forEach(item => {
            item.classList.remove("hidden");
        });

        allChatsBtn.classList.add("hidden");
        cancelBtn.classList.add("hidden");
    });

    allChatsBtn.addEventListener("click", function () {
        selectMode = true;
        let dotsImgs = document.querySelectorAll("#dot-image"); // Получаем все элементы
        messages.forEach(message => {
            message.classList.remove("active");
            message.style.zIndex = "";
            let selectDot = message.querySelector("#select-dot");
            if (selectDot) {
                selectDot.style.backgroundColor = "transparent"; // Обнуляем фон
                selectDot.style.border = "1px solid black"; // Восстанавливаем бордер
                selectDot.classList.remove("hidden"); // Опять показываем точку
            }
        });

        // Скрываем все найденные картинки
        dotsImgs.forEach(img => img.classList.add('hidden'));

        messagesContainer.innerHTML = "<p class='text-center text-gray-500 text-[28px]'>Выберите чат</p>";
        activeMessage = null;
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const chatItems = document.querySelectorAll('.chat-item');
    const mainContainer = document.querySelector('main');
    const backButton = document.getElementById('backbutton');

    chatItems.forEach(item => {
        item.addEventListener('click', function () {
            mainContainer.classList.add('chat-active');
        });
    });

    backButton.addEventListener('click', function () {
        mainContainer.classList.remove('chat-active');
    });
});

function openChat() {
    if (window.innerWidth < 1000) {
        document.getElementById('defaultBackBtn').classList.add('hidden');
        document.getElementById('backbutton').classList.remove('hidden');
        document.getElementById('showContextBtn').classList.remove('hidden');
        document.getElementById('chatList').classList.add('hidden');
        document.getElementById('chatContent').classList.remove('hidden');
        console.log("Чат открыт (мобильная версия)");
    } else {
        document.getElementById('chatContent').classList.remove('hidden');
        document.getElementById('chatList').classList.remove('hidden');
        console.log("Чат открыт (ПК)");
    }
}

function showChatList() {
    if (window.innerWidth < 1000) {
        document.getElementById('defaultBackBtn').classList.remove('hidden');
        document.getElementById('backbutton').classList.add('hidden');
        document.getElementById('showContextBtn').classList.add('hidden');
        document.getElementById('chatList').classList.remove('hidden');
        document.getElementById('chatContent').classList.add('hidden');
        console.log("Возврат к списку чатов (мобильная версия)");
    }
}

window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 1000) {
        document.getElementById('showContextBtn').classList.remove('hidden');
    }
});

document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', function () {
        openChat();
    });
});

document.querySelectorAll('.chat-container').forEach(container => {
    const chatItem = container.querySelector('.chat-item');
    const pinBtn = container.querySelector('.pin-action');

    pinBtn.addEventListener('click', () => {
        // Переключаем класс "pin" у элемента чата
        chatItem.classList.toggle('pin');

        // Обновляем текст кнопки в зависимости от состояния
        const img = pinBtn.querySelector('img'); // получаем элемент изображения
        if (img) {
            if (chatItem.classList.contains('pin')) {
                pinBtn.innerHTML = img.outerHTML + " Открепить";
            } else {
                pinBtn.innerHTML = img.outerHTML + " Закрепить";
            }
        } else {
            if (chatItem.classList.contains('pin')) {
                pinBtn.textContent = 'Открепить';
            } else {
                pinBtn.textContent = 'Закрепить';
            }
        }

        // После переключения класса обновляем порядок чатов
        reorderChats();
    });
});

function reorderChats() {
    const chatList = document.getElementById("chat-list");
    const chatContainers = Array.from(chatList.querySelectorAll('.chat-container'));

    // Сортируем контейнеры: закреплённые (с pin) получают приоритет (0), остальные – (1)
    chatContainers.sort((a, b) => {
        const aIsPinned = a.querySelector('.chat-item').classList.contains('pin') ? 0 : 1;
        const bIsPinned = b.querySelector('.chat-item').classList.contains('pin') ? 0 : 1;
        return aIsPinned - bIsPinned;
    });

    // Переставляем элементы в chatList согласно новому порядку.
    chatContainers.forEach(container => chatList.appendChild(container));
}
document.querySelectorAll('.chat-container').forEach(container => {
    const deleteBtn = container.querySelector('.delete-action');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            container.remove();
            console.log("Чат удалён");
        });
    }
});



// Реализация свайпа влево с использованием touch-событий (и mouse-событий для отладки)
if (window.innerWidth <= 1000) {
    document.querySelectorAll('.chat-item').forEach(item => {
        let startX = 0;
        let currentX = 0;
        const threshold = 200; // минимальное смещение для фиксации открытия меню
        const maxTranslate = -320; // максимальное смещение (ширина открывающегося меню)
        let touching = false;
        let moved = false;
        const moveThreshold = 5; // минимальное смещение для определения, что это именно перетаскивание

        // Обработка начала касания
        item.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
            currentX = startX;
            touching = true;
            moved = false;
            item.style.transition = '';
        });

        // Обработка движения пальца
        item.addEventListener('touchmove', function (e) {
            if (!touching) return;
            currentX = e.touches[0].clientX;
            let deltaX = currentX - startX;
            // Отмечаем, что пользователь действительно двигается, если смещение больше минимального порога
            if (Math.abs(deltaX) > moveThreshold) {
                moved = true;
            }
            // Реагируем только если пользователь двигает влево и действительно перетаскивает
            if (deltaX < 0 && moved) {
                let translateX = Math.max(deltaX, maxTranslate);
                item.style.transform = `translateX(${translateX}px)`;
            }
        });

        // Обработка завершения касания
        item.addEventListener('touchend', function (e) {
            if (!moved) {
                // Если существенного движения не было, не выполняем никаких действий
                touching = false;
                return;
            }
            touching = false;
            let deltaX = currentX - startX;
            item.style.transition = 'transform 0.3s ease';
            if (deltaX < -threshold) {
                item.style.transform = `translateX(${maxTranslate}px)`;
            } else {
                item.style.transform = 'translateX(0)';
            }
        });
    });
}



document.addEventListener("DOMContentLoaded", function () {
    const archiveButton = document.querySelector('#archive-in');
    const backButton = document.querySelector('#archive-btn');
    const archiveInner = document.getElementById("archive-inner");
    const leftSection = document.getElementById("left");

    if (archiveButton && backButton && archiveInner && leftSection) {
        archiveButton.addEventListener("click", function () {
            archiveInner.classList.remove("hidden");
            leftSection.classList.add("hidden");
        });

        backButton.addEventListener("click", function () {
            archiveInner.classList.add("hidden");
            leftSection.classList.remove("hidden");
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const chatList = document.getElementById("chat-list");
    const archiveList = document.getElementById("archived-chats");
    const contextMenu = document.getElementById("contextMenu");
    const overlay = document.getElementById("overlay");
    const archiveButton = document.getElementById("archive-chat");
    const mobileArchiveButtons = document.querySelectorAll(".archive-action");

    let currentChat = null;
    let isArchivedChat = false;

    document.querySelectorAll('.chat-container').forEach(chatContainer => {
        const archiveBtn = chatContainer.querySelector('.archive-action');
        if (archiveBtn) {
            archiveBtn.addEventListener('click', function () {
                archiveChat(chatContainer);
            });
        }
    });

    function archiveChat(chatContainer) {
        if (chatContainer) {
            const button = chatContainer.querySelector(".archive-action");
            const isCurrentlyArchived = document.getElementById("archived-chats").contains(chatContainer);
            if (isCurrentlyArchived) {
                document.getElementById("chat-list").appendChild(chatContainer);
                button.innerHTML = '<img public="/image/archive.svg" alt="">В архив';
            } else {
                document.getElementById("archived-chats").appendChild(chatContainer);
                button.innerHTML = '<img public="/image/archive.svg" alt="">Разархи </br> вировать';
            }
            resetSwipe(chatContainer.querySelector('.chat-item'));
            document.getElementById("contextMenu").classList.add("hidden");
            document.getElementById("overlay").classList.add("hidden");
        }
    }

    function resetSwipe(item) {
        if (item) {
            item.style.transition = 'transform 0.3s ease';
            item.style.transform = 'translateX(0)';
        }
    }


    archiveButton.addEventListener("click", function () {
        archiveChat(currentChat);
    });

    mobileArchiveButton.addEventListener("click", function () {
        const chatContainer = mobileArchiveButton.closest('.chat-container');

        if (chatContainer) {
            isArchivedChat = false;
            archiveChat(chatContainer);
        }
    });

    function showContextMenu(event) {
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
        contextMenu.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }

    overlay.addEventListener("click", function () {
        contextMenu.classList.add("hidden");
        overlay.classList.add("hidden");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const notificationButton = document.getElementById("toggle-notifications");

    notificationButton.addEventListener("click", function () {
        const img = notificationButton.querySelector("img");

        if (notificationButton.firstChild.textContent.trim() === "Выключить уведомления") {
            notificationButton.firstChild.textContent = "Включить уведомления ";
            img.src = "/ringoff.svg";
        } else {
            notificationButton.firstChild.textContent = "Выключить уведомления ";
            img.src = "/ringon.png";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const infoElement = document.querySelector(".info");
    const overlay = document.getElementById("overlay");
    const infoContent = document.querySelector(".info-content");

    if (infoElement && overlay && infoContent) {
        infoElement.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation(); // Останавливаем всплытие клика
            overlay.classList.remove("hidden");
            infoContent.style.visibility = "visible";
            infoContent.style.opacity = "1";
        });

        overlay.addEventListener("click", function () {
            overlay.classList.add("hidden");
            infoContent.style.visibility = "hidden";
            infoContent.style.opacity = "0";
        });

        document.addEventListener("click", function (event) {
            if (!infoElement.contains(event.target) && !infoContent.contains(event.target)) {
                // event.preventDefault();
                overlay.classList.add("hidden");
                infoContent.style.visibility = "hidden";
                infoContent.style.opacity = "0";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const archiveIn = document.getElementById('archive-in');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');

    let startY = 0;
    let isDragging = false;
    let isSearchVisible = false;

    archiveIn.addEventListener('touchstart', (e) => {
        if (window.innerWidth < 1000) {
            startY = e.touches[0].clientY;
            isDragging = true;
        }
    });

    archiveIn.addEventListener('touchmove', (e) => {
        if (isDragging && window.innerWidth < 1000) {
            const currentY = e.touches[0].clientY;
            const diffY = currentY - startY;

            if (diffY > 50 && !isSearchVisible) {
                searchContainer.classList.add('visible');
                searchContainer.style.display = 'flex';
                isSearchVisible = true;
            } else if (diffY < -50 && isSearchVisible) {
                searchContainer.classList.remove('visible');
                setTimeout(() => {
                    searchContainer.style.display = 'none';
                }, 300);
                isSearchVisible = false;
            }
        }
    });

    archiveIn.addEventListener('touchend', () => {
        isDragging = false;
    });

    archiveIn.addEventListener('mousedown', (e) => {
        if (window.innerWidth < 1000) {
            startY = e.clientY;
            isDragging = true;
        }
    });

    archiveIn.addEventListener('mousemove', (e) => {
        if (isDragging && window.innerWidth < 1000) {
            const currentY = e.clientY;
            const diffY = currentY - startY;

            if (diffY > 50 && !isSearchVisible) {
                searchContainer.classList.add('visible');
                searchContainer.style.display = 'flex';
                isSearchVisible = true;
            } else if (diffY < -50 && isSearchVisible) {
                searchContainer.classList.remove('visible');
                setTimeout(() => {
                    searchContainer.style.display = 'none';
                }, 300);
                isSearchVisible = false;
            }
        }
    });

    archiveIn.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Скрываем инпут при загрузке страницы, если ширина экрана меньше 1000px
    if (window.innerWidth < 1000) {
        searchContainer.style.display = 'none';
    }

    // Обработчик события resize, чтобы скрывать/показывать инпут при изменении размера экрана
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1000) {
            searchContainer.classList.remove('visible');
            searchContainer.style.display = 'none';
            isSearchVisible = false;
        } else {
            if (!isSearchVisible){
              searchContainer.style.display = 'none';
            }
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".offer-modal");
    const closeBtn = document.querySelector(".close-btn");
    const openBtns = document.querySelectorAll("#open-modal"); // Ищем все кнопки

    if (!modal || !closeBtn || openBtns.length === 0) {
        return;
    }

    // Добавляем обработчик на каждую кнопку
    openBtns.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.preventDefault(); // Предотвращаем переход по href="#"
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});






function toggleCheckbox() {
    const checkbox = document.getElementById('rememberCheckbox');
    checkbox.checked = !checkbox.checked;
}


document.addEventListener('DOMContentLoaded', function () {
    const checkMail = document.getElementById('checkMail');
    if (checkMail) {
        checkMail.addEventListener('animationend', function () {
            checkMail.style.display = 'none';
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");

    const nextButton = document.getElementById("next-button");

    if (nextButton) {
        if (from === "forgot-password") {
            nextButton.href = "./editpassword.html";
        } else {
            nextButton.href = "./login.html?from=register";
        }
    }

    if (from === "register") {
        const sussefulMessage = document.querySelector(".susseful");

        if (sussefulMessage) {
            sussefulMessage.classList.add("show");

            setTimeout(() => {
                sussefulMessage.classList.remove("show");
            }, 3000);
        }
    }
});

const editButtons = document.querySelectorAll("#editProfileButton");
const profileName = document.getElementById("profileName");
const profileImageInput = document.getElementById("avatar-upload");
const profileImage = document.getElementById("profileImage");
const infoItems = document.querySelectorAll(".info-item");
const infoTexts = document.querySelectorAll(".info-text");
const infoInputs = document.querySelectorAll(".info-input");
const editIcons = document.querySelectorAll(".edit-icon");
const avatarOverlay = document.querySelector(".avatar-overlay");
const infoLabels = document.querySelectorAll('.info-label'); // Qo'shildi

if (
    editButtons.length > 0 &&
    profileName &&
    infoItems.length > 0 &&
    infoTexts.length > 0 &&
    infoInputs.length > 0 &&
    editIcons.length > 0 &&
    profileImageInput &&
    avatarOverlay
) {
    editButtons.forEach(editButton => {
        editButton.addEventListener("click", () => {
            const isEditing = editButton.innerText === "Редактировать профиль";

            editButtons.forEach(button => button.innerText = isEditing ? "Применить" : "Редактировать профиль");
            profileName.disabled = !isEditing;
            profileName.classList.toggle("border-gray-300", isEditing);
            profileName.classList.toggle("border", isEditing);
            profileName.classList.toggle("rounded-lg", isEditing);
            

            infoItems.forEach((item, index) => {
                infoTexts[index].classList.toggle("hidden", isEditing);
                infoInputs[index].classList.toggle("hidden", !isEditing);
                infoInputs[index].disabled = !isEditing;
                infoInputs[index].classList.toggle("border-gray-300", isEditing);
                infoInputs[index].classList.toggle("border", isEditing);
                infoInputs[index].classList.toggle("rounded-lg", isEditing);
                if (!isEditing) {
                    infoTexts[index].innerText = infoInputs[index].value;
                }
            });

            editIcons.forEach(icon => icon.classList.toggle("hidden", !isEditing));
            profileImageInput.classList.toggle("hidden", !isEditing);
            avatarOverlay.classList.toggle("hidden", !isEditing);

            // Qo'shimcha: label'larni yashirish/tiklash
            infoLabels.forEach(label => {
                label.style.display = isEditing ? "none" : "";
            });
        });
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const profileImageInput = document.getElementById("profileImageInput");
    const profileImage = document.getElementById("profileImage");

    if (profileImageInput && profileImage) {
        profileImageInput.addEventListener("change", () => {
            const file = profileImageInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//   const infoModal = document.querySelector('.info-modal');
//   if (infoModal) {
//     // ...modal bilan ishlаш...
//   }
// });



