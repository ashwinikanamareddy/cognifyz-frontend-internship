const btn = document.getElementById('activate-btn');
const orb = document.getElementById('neural-orb');
const status = document.getElementById('status-mode');
const sync = document.getElementById('sync-val');
const temp = document.getElementById('temp-val');
const body = document.getElementById('system-body');

let isActive = false;

btn.addEventListener('click', () => {
    if (!isActive) {
        // Start Initialization Sequence
        btn.innerText = "INITIALIZING...";
        btn.style.opacity = "0.5";
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            sync.innerText = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                activateCore();
            }
        }, 50);
    } else {
        resetCore();
    }
});

function activateCore() {
    isActive = true;
    status.innerText = "OVERLOAD";
    status.style.color = "#ff0000";
    temp.innerText = "98°C";
    
    orb.classList.add('orb-critical');
    body.classList.add('emergency-bg');
    
    btn.innerText = "SHUTDOWN CORE";
    btn.style.opacity = "1";
    btn.style.borderColor = "#ff0000";
    btn.style.color = "#ff0000";
}

function resetCore() {
    isActive = false;
    status.innerText = "LOCKED";
    status.style.color = "#00f2ff";
    sync.innerText = "0%";
    temp.innerText = "24°C";
    
    orb.classList.remove('orb-critical');
    body.classList.remove('emergency-bg');
    
    btn.innerText = "INITIALIZE CORE";
    btn.style.borderColor = "#00f2ff";
    btn.style.color = "#00f2ff";
}