export default function Header({ name }) {
    return(
        <div className="flex font-bold justify-center items-center mb-4  w-full">
            <header>{name}</header>
        </div>
    )
}