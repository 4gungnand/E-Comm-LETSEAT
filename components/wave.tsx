export default function wave(){
    return (
        <div className="curve">
            <style jsx>

                .curve {
                    position: absolute;
                    height: 250px;
                    width: 100%;
                    bottom: 0;
                    text-align: center;
                }

                .curve::before {
                    content: '';
                    display: block;
                    position: absolute;
                    border-radius: 100% 50%;
                    width: 55%;
                    height: 100%;
                    transform: translate(85%, 60%);
                    background-color: hsl(216, 21%, 16%);
                }

                .curve::after {
                    content: '';
                    display: block;
                    position: absolute;
                    border-radius: 100% 50%;
                    width: 55%;
                    height: 100%;
                    background-color: #3c31dd;
                    transform: translate(-4%, 40%);
                    z-index: -1;
                }
            </style>
        </div>
    )
}