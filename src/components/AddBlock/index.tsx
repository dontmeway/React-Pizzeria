import React from "react";

import cl from './AddBlock.module.scss'


const languages: string[] = ['Eng', "Rus", "Uzb"];

export const AddBlock:React.FC = () => {
    const [selectedLang, setSelectedLang] = React.useState(languages[1])
    const [isPopupOpen, setIsPopUpOpen] = React.useState(false)
    const popUpRef = React.useRef<HTMLDivElement>(null)



    const handleChangeLang = (value:string) => {
        setSelectedLang(value)
        setIsPopUpOpen(false)
    }
    const handleIsPopup = (e:any) => {
        if (!e.path.includes(popUpRef.current)) {
            setIsPopUpOpen(false)
        }
    }
    const handlePopUp = () => {
        setIsPopUpOpen(prev => !prev)
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleIsPopup)
    })



    return (
        <div className = {cl.addBlock}>
            <div className = {`${cl.addBlock__content} container`}>
                <div className = {cl.phoneNumber}>
                    <i className="bi bi-telephone-fill"></i>
                    +998 (90) 922-46-74
                </div>
                <div>
                    <div ref = {popUpRef} className = {cl.languageBlock}>
                        <div onClick = {handlePopUp} className = {cl.active__language}>
                            <span>{selectedLang}</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                        <ul className = {isPopupOpen ? `${cl.language__popup} activePopup` : cl.language__popup}>
                            {languages.map((lang, index) => 
                            <li 
                                onClick = {() => handleChangeLang(lang)}
                                key = {index + lang}>
                                {lang}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}