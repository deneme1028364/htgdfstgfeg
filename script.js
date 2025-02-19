// Giriş ekranı 3 saniye sonra kaybolacak ve ana içerik görünecek
setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 3000);

// Kullanıcı ismini girdikten sonra sohbeti başlatacak
function startChat() {
    const username = document.getElementById('username').value;

    if (username.trim() !== '') {
        localStorage.setItem('username', username);
        // İsim girildikten sonra chat ve kanallar görünsün
        document.getElementById('name-input').style.display = 'none';
        loadChannels();  // Kanalları yükler
    } else {
        alert("Lütfen isminizi girin.");
    }
}

// Kanalları yükleme
function loadChannels() {
    const username = localStorage.getItem('username');
    document.getElementById('channels').style.display = 'flex';  // Kanalları göster

    document.getElementById('channels').innerHTML = `
        <a href="#" onclick="showChannel('main-menu')">Ana Menü</a>
        <a href="#" onclick="showChannel('chat-channel')">Chat Kanalı</a>
        <a href="#" onclick="showChannel('anonymous-channel')">Anonim Kanal</a>
    `;

    // Ana Kanal içerikleri
    showChannel('main-menu', username);
}

// Kanal gösterimi
function showChannel(channel, username) {
    let content = '';
    if (channel === 'main-menu') {
        content = `
            <div class="channel">
                <h2>Ana Menü - Programmer By: BLODWHITE</h2>
                <p>Hoş geldin, ${username}</p>
            </div>
        `;
    } else if (channel === 'chat-channel') {
        content = `
            <div class="channel">
                <h2>Chat Kanalı</h2>
                <div id="chat">
                    <div class="message user">Merhaba, ${username}!</div>
                </div>
            </div>
        `;
    } else if (channel === 'anonymous-channel') {
        content = `
            <div class="channel">
                <h2>Anonim Kanal</h2>
                <div id="chat">
                    <div class="message">Anonim kişi burada!</div>
                </div>
            </div>
        `;
    }

    document.getElementById('channels').innerHTML += content;
}