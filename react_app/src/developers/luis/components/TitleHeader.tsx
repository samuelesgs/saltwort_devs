
export const TitleHeader = () => {
    return (
        <div className='text-white grid grid-cols-1 md:grid-cols-5 gap-6'>
            <div className="col-span-1 flex justify-center md:block">
                <div className="img-glow shadow-gradient">
                    <img
                        src="./aksel/image-profile.jpeg"
                        alt="image-profile"
                        className="w-40 h-40 sm:w-52 sm:h-64 md:w-full md:h-95 object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className='col-span-1 md:col-span-4'>
                <p className='flex justify-center blinking text-cyan bg-cyan w-fit text-sm md:w-68 mx-auto md:mx-0 rounded-full p-2 mb-4'>
                    Disponible para nuevos proyectos
                </p>
                <div className='grid col-span-1 md:grid-cols-3 mb-5 text-center md:text-left'>
                    <div className='col-span-2 text-3xl md:text-6xl font-bold mb-2'>
                        <span className='text-title-gray'>
                            Luis  {' '}
                        </span>
                        <span className="text-title-gradient">
                            Paulo
                        </span>
                    </div>
                    <div className="col-span-2 text-3xl md:text-6xl font-bold">
                        Caldero Nava
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mb-5 items-center sm:items-start">
                    <div className="jum-hover p-3 box-cyan rounded-lg bg-box flex gap-4">
                        <img
                            src="./aksel/ios-phone.png"
                            alt="item-ios-phone"
                            className="object-fill w-5"/>
                        Android developer
                    </div>
                    <div className="jum-hover p-3 box-purple rounded-lg bg-box flex gap-4">
                        <img
                            src="./aksel/full-stack-arrows.png"
                            alt="item-ios-phone"
                            className="object-fill w-6"/>
                        Desktop developer
                    </div>
                </div>
                <p className="col-span-2 secondary-text w-full text-center md:text-left">
                    Soy un desarrollador apasionado por el desarrollo de software, con experiencia en desarrollo móvil Android utilizando Android Studio con Java y Kotlin, así como en aplicaciones de escritorio y servicios con C# y Visual Studio ya sea en Windows Forms o WPF. He trabajado con tecnologías en tiempo real como WebSockets y SignalR, además de integración y consumo de APIs REST. Tengo conocimientos en bases de datos como PostgreSQL, MySQL y SQL Server, realizando consultas, administración e integración de información para sistemas empresariales.
Cuento con experiencia aplicando arquitecturas y buenas prácticas como MVC, MVVM y desarrollo modular, enfocándome en crear código limpio, reutilizable y escalable. Me considero una persona autodidacta, responsable y en constante aprendizaje, siempre buscando mejorar mis habilidades y crecer profesionalmente en el área del desarrollo de software.
                </p>
            </div>
        </div>
    )
}
