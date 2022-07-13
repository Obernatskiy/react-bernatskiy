export default function CommentComponent ({item}) {
    return (
        <div>
            <h3>{item.id} {item.body}</h3>
        </div>
    );
}