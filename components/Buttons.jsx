import Link from "next/link"

function Buttons({ title, href }) {
    return (
        <Link href={href || '#'} passHref={true}>
            <div className="block bg-blue-500 items-center w-auto rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 md:px-8 md:py-3">
                <span className="text-white text-base">{title}</span>
            </div>
        </Link>

    )
}

export default Buttons
