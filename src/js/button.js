class button{
    constructor(x, y, label, scene, callback){
        const button = scene.add.text(x, y, label)
        .setorigin(0.5)
        .setpadding(10)
        .setstyle({
            backgroundcolor: "#fff",
            fontSize: '50px',
            fill: '#000'
        })
        .setinteractive({usehandcursor: true})
        .on("pointerdown", ()=> callback())
        .on('pointerover', () => button.setStyle({ fill: '#0000ff' }))
        .on('pointerout', () => button.setStyle({ fill: '#000' }));
    }
}