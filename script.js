const postText = document.getElementById('postText');
const publishBtn = document.getElementById('publishBtn');
const postsContainer = document.getElementById('posts');
const emojiButtons = document.querySelectorAll('[data-emoji]');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');
const chatBox = document.getElementById('chatBox');

emojiButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    postText.value += `${btn.dataset.emoji} `;
    postText.focus();
  });
});

function formatTime() {
  return 'adesso';
}

publishBtn?.addEventListener('click', () => {
  const text = postText.value.trim();
  if (!text) return;

  const post = document.createElement('article');
  post.className = 'post';
  post.innerHTML = `
    <div class="post-head">
      <strong>@tuo_profilo</strong>
      <span>${formatTime()}</span>
    </div>
    <p>${text}</p>
    <div class="post-actions">
      <button class="react">❤️ 1</button>
      <button class="react">🔥 0</button>
      <button class="react">😂 0</button>
      <button>Commenta</button>
      <button>Condividi</button>
    </div>
  `;

  postsContainer.prepend(post);
  postText.value = '';
});

sendChat?.addEventListener('click', () => {
  const text = chatInput.value.trim();
  if (!text) return;

  const message = document.createElement('p');
  message.innerHTML = `<strong>Tu:</strong> ${text}`;
  chatBox.appendChild(message);
  chatInput.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
});

postsContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement) || !target.classList.contains('react')) {
    return;
  }

  const [emoji, countValue] = target.textContent.split(' ');
  const nextCount = Number(countValue) + 1;
  target.textContent = `${emoji} ${nextCount}`;
});
