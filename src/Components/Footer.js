import React from 'react'

export default function Footer(props) {
    return (
        <>
            <div className="container-fluide">
                <div className="footer" style={{backgroundColor: props.theme === 'dark' ? 'black' : ''} }>
                    <p>Copyright &copy; 2023 | Hunain Aslam</p>
                </div>
            </div>
        </>
    )
}
