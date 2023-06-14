const some_shit =
    `
  __        __   _                            _     
/ _\ ___  / _| | |__    __ _  __   __  _ __  (_)  _ 
\ \ / __|/ / | | '_ \  / _' | \ \ / / | '__| | | (_)
_\ \ (__| |_| | |_) || (_| |  \ V /  | |    | |  _ 
\__/\___|\__,_|_.__/  \__,_|   \_/   |_|    |_| (_)
     
`

const shit =
    `
____  _              __  __                 
/ __ \| |            |  \/  |                
| |  | | |_   _  ___  | \  / | __ _ _ __  ___ 
| |  | | | | | |/ _ \ | |\/| |/ _' | '_ \/ __|
| |__| | | |_| |  __/ | |  | | (_| | | | \__ \
\____/|_|\__,_|\___| |_|  |_|\__,_|_| |_|___/
                                             
`

const anotherShit =
    `
_______ _              _______         
|__   __| |            |__   __|        
   | |  | |__   ___  __   | | ___   ___ 
   | |  | '_ \ / _ \ \ \  | |/ _ \ / _ \
   | |  | | | |  __/  > > | | (_) |  __/
   |_|  |_| |_|\___| /_/  |_|\___/ \___|
                                        

`


document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.getElementById("script_name");
    var text = element.innerHTML;
    element.innerHTML = "";

    var index = 0;
    var timer = setInterval(async function () {
        element.innerHTML += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(timer);
            const pointer = document.getElementById('pointer')
            pointer.style.animation = 'blink .5s infinite';

            await new Promise((resolve) => setTimeout(() => resolve(), 2000))
            pointer.style.display = 'none';
            showMagic()
        }
    }, 150);
});

let container = document.getElementById('container');
async function showMagic() {

    await sleep(10)
    setMessage('Hacking sequence initiated...');

    await sleep(2000)
    setMessage('Pinging nasa servers...')

    await sleep(2000)
    setMessage('Pinging nasa servers...')

    await sleep(2000)
    setMessage('Pinging nasa servers...')

    await sleep(2000)
    setMessage('Response received...')

    await sleep(2000)
    setMessage(some_shit)

    await sleep(2000)
    setMessage('Looking for backdoor...')

    await sleep(2000)
    setMessage('No backdoor found...')

    await sleep(2000)
    setMessage('Scanning ports...')

    await sleep(2000)
    setMessage('Scanning ports...')

    await sleep(2000)
    setMessage('Found an open port...')

    setMessage(shit)

    await sleep(2000)
    setMessage('Initiating query="alien"')

    await sleep(2000)
    setMessage('Searching nasa database...')
    autoScroll()

    await sleep(2000)
    setMessage('Searching nasa database...')
    autoScroll()

    await sleep(2000)
    setMessage('69,420 files about aliens found...')
    autoScroll()

    await sleep(2000)
    setMessage(anotherShit)
    autoScroll()

    await sleep(2000)
    setMessage('Establishing ftp connection...')
    autoScroll()

    await sleep(2000)
    setMessage('ftp connection established...')
    autoScroll()

    await sleep(2000)
    setMessage('Initiating copy file sequence...')
    autoScroll()

    await sleep(2000)
    setMessage('69 files copied...')
    autoScroll()

    await sleep(1000)
    setMessage('ip address exposed...')
    autoScroll()

    await sleep(500)
    setMessage('ip address exposed...')
    autoScroll()

    await sleep(500)
    setMessage('ip address exposed...')
    autoScroll()

    await sleep(500)
    setMessage('ip address exposed...')
    autoScroll()

    await sleep(500)
    setMessage('ip address exposed...')
    autoScroll()

    await sleep(2000)
    setMessage('Initiating self_destruction() sequence...')
    autoScroll()

    await sleep(2000)
    setMessage('self_destruction() sequence initiated...')
    autoScroll()

    await sleep(2000)
    setMessage('Hard drives formatted...')
    autoScroll()

    await sleep(2000)
    setMessage('set_system_on_fire() initiated...')
    autoScroll()

    await sleep(2000)
    container.innerHTML = `<div class="fire"></div>`
}

function setMessage(msg) {
    container.innerHTML += `<div>${msg}</div>`
}

function sleep(t) {
    return new Promise((resolve) => setTimeout(() => resolve(), t))
}

function autoScroll() {
    container.scrollTop = container.scrollHeight;
}