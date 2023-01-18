import Post from "../post/Post";
import "./Posts.scss";

function Posts() {
  const post = [
    {
      id: 1,
      name: "Rohmat",
      userId: 1,
      profilePic:
        "https://theplanetd.com/images/Things-to-do-in-Grindelwald-Switzerland.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://theplanetd.com/images/Things-to-do-in-Grindelwald-Switzerland.jpg",
    },
    {
      id: 2,
      name: "Dasuki",
      userId: 2,
      profilePic:
        "https://theplanetd.com/images/Things-to-do-in-Grindelwald-Switzerland.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];
  return (
    <div className="posts">
      {post.map((data) => (
        <Post post={data} key={data.id} />
      ))}
    </div>
  );
}

export default Posts;
