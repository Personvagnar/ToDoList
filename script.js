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
        Tvätt: 10
    };

    const taskBtns = document.querySelectorAll('.tasksection_cardBtn');

    taskBtns.forEach(function(taskBtn) {
        taskBtn.addEventListener('click', function() {

            const taskName = taskBtn.getAttribute('data-item');

            currentBalance += taskValues[taskName];

            earnedAmount.textContent = `${currentBalance}`;

            localStorage.setItem('balance', currentBalance);

            taskBtn.classList.toggle('active');
            setTimeout(function() {
                taskBtn.classList.remove('active');
            }, 2000);
        });
    });

    const resetBalanceBtn = document.getElementById('resetAmountBtn');

    resetBalanceBtn.addEventListener('click', function () {
        currentBalance = 0;
        earnedAmount.textContent = `${currentBalance}`;
        localStorage.setItem('balance', currentBalance);
    })

    currentUser.addEventListener('click', function() {
        if (currentUser.textContent === 'Mathilda') {
            window.location.href = 'indexN.html';
        } else {
            window.location.href = 'indexM.html';
        }
    });

});