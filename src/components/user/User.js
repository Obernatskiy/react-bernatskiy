export default function User ({item,elevate}) {
    const onclick = () => {
         elevate(item.id);
    }
    return (
        <div>
            {item.name}
            <button onClick={onclick}>shop posts</button>
        </div>
    );
}