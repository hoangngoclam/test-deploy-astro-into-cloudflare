import BlogItem from './BlogItem';

type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ListBlogs: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default ListBlogs;
