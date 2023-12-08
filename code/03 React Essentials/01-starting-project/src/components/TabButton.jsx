export default function TabButton({label,onSelect}){
    return (
        <button onClick={onSelect}>{label}</button>
    );
}
