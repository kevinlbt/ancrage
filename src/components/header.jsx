

export default function Header() {

    return <div className="header w-4/5 p-12 mx-auto rounded-xl my-24">
        <div className="flex justify-around items-center p-12 bg-white/60 rounded-xl">
            <div className="header_text w-2/4 flex flex-col justify-center items-center">
                <h1>Ecocentrisme c'est quoi ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sagittis massa. Nulla facilisi. Cras id arcu lorem, et semper purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel enim mi, in lobortis sem. Vestibulum luctus elit eu libero ultrices id fermentum sem sagittis</p>
                <p>Nulla imperdiet mauris sed sapien dignissim id aliquam est aliquam. Maecenas non odio ipsum, a elementum nisi. Mauris non erat eu erat placerat convallis.</p>
                <p>Vivamus sed libero nec mauris pulvinar facilisis ut non sem. Quisque mollis ullamcorper diam vel faucibus. Vestibulum sollicitudin facilisis feugiat. Nulla euismod sodales hendrerit.</p>
            </div>
            <img className="w-1/4 h-auto rounded-xl" srcSet="./assets/images/tableau.jpg" alt="" />
        </div>
    </div>
}