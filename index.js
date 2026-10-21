const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.getElementById("posts");

function renderPosts() {
  posts.forEach((post) => {
    postContainer.innerHTML += `
              <section class="post">
        <div class="post-header">
          <img
            src="${post.avatar}"
            alt="vincent van gough profile pic "
            class="profile-img"
          />
          <div class="post-header-text">
            <p>${post.name}</p>
            <p>${post.location}</p>
          </div>
        </div>
        <div class="post-body">
          <img
            class="post-img"
            src="${post.post}"
          />

          <div class="btn-container">
            <button class ="like-btn">
              <img
                class="icon-img"
                src="images/icon-heart.png"
              />
            </button>
            <button>
              <img
                src="images/icon-comment.png"
                alt=""
                class="icon-img"
              />
            </button>
            <button>
              <img
                src="images/icon-dm.png"
                alt=""
                class="icon-img"
              />
            </button>
          </div>

          <p><span class="bold-para"> ${post.likes} likes</span></p>
          <p>
            <span class="bold-para">${post.username}</span> ${post.comment}
          </p>
        </div>
      </section>
        `;
  });
}
renderPosts();
