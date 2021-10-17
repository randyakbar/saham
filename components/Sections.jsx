function Sections(props) {
    return (
        <section className="relative mb-10">
            <div className={`max-w-6xl mx-auto text-center ${props.styles || 'items-center justify-center '}  ${props.isFullscreen || 'px-4 md:px-4'}`}>
                { props.children }
            </div>
        </section>
    )
}

export default Sections
