export default function MyHeader(props) {
    return (
        <header className="flex flex-row w-full justify-between">
            <div className="w-2/4">
                <a href="/">
                    <p style={{
                            textDecorationColor: 'rgb(124, 58, 237)', 
                            textDecorationThickness: '2px', 
                            textUnderlineOffset: '2px'
                        }} 
                        className="text-xl text-black-600 underline"
                    >
                        <span className="text-purple-600">{'<'}</span>
                        <span>{'Goazevedo.dev'}</span>
                        <span className="text-purple-600">{'/>'}</span>
                    </p>
                </a>
            </div>
            <div className="w-2/4 hidden md:flex flex-row justify-around">
                <a className="text-purple-600" href="./about">About</a>
                <a className="text-purple-600" href="./blog">Blog</a>
                <a className="text-purple-600" href="./projects">Projects</a>
                <a className="text-purple-600" href="./resume">Resume</a>
            </div>
        </header>
    )
}