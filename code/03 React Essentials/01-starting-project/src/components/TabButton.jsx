export default function TabButton({label,onSelect}){

    function onClick(event){
        alert('button click'+event.target.value);
    }

    return (
        <button onClick={onSelect}>{label}</button>
    );
}
