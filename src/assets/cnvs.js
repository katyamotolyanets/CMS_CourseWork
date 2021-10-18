import "../App.scss";


const mascotContainerStyle = {
    backgroundColor: 'transparent',
    height: '69px',
    margin: '0 auto',
    width: '140px'
};

const canvasStyle = {
    backgroundColor: 'transparent',
    display: 'block',
    height: '69px',
    position: 'absolute',
    width: '140px'
};

const domOverlayStyle = {
    display: 'block',
    height: '69px',
    left: '0',
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    top: '0',
    width: '140px'
}

const SVG = () => (
    <div className='MascotPosition'>
        <div id="animation_container" style={mascotContainerStyle}>
            <canvas id="canvas" style={canvasStyle} width="560" height="276"></canvas>
            <div id="dom_overlay_container" style={domOverlayStyle}>
            </div>
        </div>
    </div>
);

export default SVG;