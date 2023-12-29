import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import { formatDate } from "@/utils";

const getPost = async (slug) => {
  try {
    const res = await fetch(`${process.env.API_URL}/posts/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("No posts found.");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post.user.image}
                  alt="avatar"
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user.name}</span>
              <span className={styles.date}>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt="post image"
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={post.slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
