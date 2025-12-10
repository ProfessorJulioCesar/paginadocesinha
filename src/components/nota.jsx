import './nota.css'

export default function Nota({titulo, subtitulo, paragrafo, links}) {
    return (
        <div className='nota'>
            {titulo && <h2 className='nota-titulo'> {titulo} </h2>}
            {subtitulo && <h3 className='nota-subtitulo'> {subtitulo} </h3>}
            {paragrafo && <p className='nota-paragrafo'> {paragrafo} </p>}
            
            {links && links.length > 0 && (
                <ul className='nota-links'>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target='_blank' rel='noopener noreferrer'>
                                {link.label || link.url}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );  
};