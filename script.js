document.addEventListener('DOMContentLoaded', function() {
    const element = document.body;
    const pageLoaded = element.dataset.page;

    const earnedAmount = document.getElementById('earnedAmount');
    const savedBalance = localStorage.getItem('balance');
    
    let currentBalance = savedBalance ? parseInt(savedBalance) : 0;

    earnedAmount.textContent = `${currentBalance}`;

    console.log(pageLoaded);

    const toggleUsers = document.querySelector('.userImg');
    const currentUser = document.querySelector('.currentUser');

    toggleUsers.addEventListener('click', function() {
        if (currentUser.textContent === 'Mathilda') {
            window.location.href = 'mathildaprofile.html';
        } else {
            window.location.href = 'nathaliaprofile.html';
        }
    });

    const taskValues = {
        Dammsuga: 10,
        Sopor: 5,
        Tvätt: 10,
        Fönsterbräde: 5
    };

    const taskCards = document.querySelectorAll('.tasksection_card');
    const taskBtnlayout = document.querySelectorAll('.tasksection_card_Btnlayout');

    taskCards.forEach(function(taskCard, index) {
        taskCard.addEventListener('click', function () {
            taskBtnlayout[index].classList.toggle('active');
        });
    })

    const taskBtns = document.querySelectorAll('.tasksection_cardBtn');

    taskBtns.forEach(function(taskBtn, index) {
        taskBtn.addEventListener('click', function() {

            console.log('add');

            const taskName = taskBtn.getAttribute('data-item');

            const taskBtnLayout = taskBtnlayout[index];

            currentBalance += taskValues[taskName];

            earnedAmount.textContent = `${currentBalance}`;

            localStorage.setItem('balance', currentBalance);

            taskBtn.classList.toggle('active');

            setTimeout(function() {
                taskBtn.classList.remove('active');

                if (taskBtnLayout.classList.contains('active')) {
                    taskBtnLayout.classList.remove('active');
                };
            }, 1000);
        });
    });

    const sysslorCheckbox = document.getElementById('sysslorCheckBox');
    const resetCard = document.querySelector('.cardcontainer--resetcard');
    const resetBalanceBtn = document.getElementById('resetAmountBtn');

    if (sysslorCheckbox && resetCard && resetBalanceBtn) {
        sysslorCheckbox.addEventListener('click', function() {
            console.log('sysslorcheckbox');

            if (sysslorCheckbox.checked) {
                resetCard.classList.add('active');
            } else {
                resetCard.classList.remove('active');
            };
        });

    resetBalanceBtn.addEventListener('click', function () {
        currentBalance = 0;
        earnedAmount.textContent = `${currentBalance}`;
        localStorage.setItem('balance', currentBalance);
        resetCard.classList.remove('active');
        sysslorCheckbox.checked = false;
    });

    }

    currentUser.addEventListener('click', function() {
        if (currentUser.textContent === 'Mathilda') {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'indexM.html';
        }
    });

});