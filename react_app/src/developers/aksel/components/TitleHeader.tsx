
export const TitleHeader = () => {
    return (
        <div className='text-white grid grid-cols-1 md:grid-cols-5 gap-6'>
            <div className="col-span-1 flex justify-center md:block">
                <div className="img-glow shadow-gradient">
                    <img
                        src="./aksel/image-profile.jpg"
                        alt="image-profile"
                        className="w-40 h-40 sm:w-52 sm:h-64 md:w-60 md:h-75 object-cover rounded-lg"
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
                            Aksel {' '}
                        </span>
                        <span className="text-title-gradient">
                            Akemi
                        </span>
                    </div>
                    <div className="col-span-2 text-3xl md:text-6xl font-bold">
                        Herrera Gonzalez
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mb-5 items-center sm:items-start">
                    <div className="jum-hover p-3 box-cyan rounded-lg bg-box flex gap-4">
                        <img
                            src="./aksel/ios-phone.png"
                            alt="item-ios-phone"
                            className="object-fill w-5"/>
                        iOS Developer
                    </div>
                    <div className="jum-hover p-3 box-purple rounded-lg bg-box flex gap-4">
                        <img
                            src="./aksel/full-stack-arrows.png"
                            alt="item-ios-phone"
                            className="object-fill w-6"/>
                        Full Stack Developer
                    </div>
                </div>
                <p className="col-span-2 secondary-text w-full md:w-180 text-center md:text-left">
                    Ingeniero en desarrollo y gestión de software con amplia experiencia en la creación de aplicaciones móviles nativas para iOS y el desarrollo de aplicaciones web con Angular y React. Cuento con conocimientos en el diseño y desarrollo de APIs REST utilizando Node.js y NestJS. Tengo experiencia en la integración de servicios externos, la optimización de procesos y la migración tecnológica para mejorar el rendimiento y la escalabilidad de los sistemas.
                </p>
            </div>
        </div>
    )
}
