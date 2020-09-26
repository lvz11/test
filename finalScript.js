
// 新建three.js场景
let scene = new THREE.Scene()

// helper
let debug = false
// debuug
if (debug === true){
    scene.add(axesHelper);
    scene.add(gridHelper);
}



// ============================================   skybox  ========================================

//天空材质
let path = "cube_texture/CubeTexture_"
let format = ".jpg"
let urls = [
  'cube_texture/CubeTexture.jpg','cube_texture/CubeTexture.jpg',
  'cube_texture/CubeTexture.jpg','cube_texture/CubeTexture.jpg',
  'cube_texture/CubeTexture.jpg','cube_texture/CubeTexture.jpg'
]
let textureCube = new THREE.CubeTextureLoader().load( urls )
scene.background = textureCube

// ============================================   skyboxEnded   ========================================

// ============================================   another basis build   ========================================

// 新建画布?
let mycanvas = document.querySelector('#webgl-canvas')

// 新建渲染器
let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: mycanvas})
renderer.setSize(window.innerWidth, window.innerHeight)

// helper
let axesHelper = new THREE.AxesHelper(5)
let gridHelper = new THREE.GridHelper(5, 10)

// ============================================   end   ========================================

// ============================================   材质和模型   ========================================



//webcamera 组合拳
let constraints = { audio: false, video: true }; 
let promise =navigator.mediaDevices.getUserMedia(constraints)
promise.then(function(mediaStream) {
  let video = document.querySelector('#webcam-holder');
  video.srcObject = mediaStream;
})
let videooo = document.getElementById('webcam-holder')
let CameraTexture = new THREE.VideoTexture(videooo)
// 创建材质

// 黑转场材质
let blackMat = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})
let blackMat1 = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})
let blackMat2 = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})
let blackMat3 = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})
let blackMat4 = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})
let blackMat5 = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})
let blackMat6 = new THREE.MeshBasicMaterial({color: 0x161616, transparent: true})

console.log(blackMat.transparent)

// 控制这个值就可以控制黑转场
blackMat.opacity = 0
blackMat1.opacity = 0
blackMat2.opacity = 0
blackMat3.opacity = 0
blackMat4.opacity = 0
blackMat5.opacity = 0
blackMat6.opacity = 0


// 黑转场平面
let blackGeo = new THREE.PlaneGeometry(8.6,4.84)

let black = new THREE.Mesh(blackGeo,blackMat)
let black1 = new THREE.Mesh(blackGeo,blackMat1)
let black2 = new THREE.Mesh(blackGeo,blackMat2)
let black3 = new THREE.Mesh(blackGeo,blackMat3)
let black4 = new THREE.Mesh(blackGeo,blackMat4)
let black5 = new THREE.Mesh(blackGeo,blackMat5)
let black6 = new THREE.Mesh(blackGeo,blackMat6)



black.position.z = 6.01
black1.position.z = 6.01
black2.position.z = 6.01
black3.position.z = 6.01
black4.position.z = 6.01
black5.position.z = 6.01
black6.position.z = 6.01



// video texture
let flashVideo = document.getElementById('flash')
let flashTxeture = new THREE.VideoTexture(flashVideo)
let ticketVideo = document.getElementById('ticket')
let ticketTxeture = new THREE.VideoTexture(ticketVideo)
let playgroundVideo = document.getElementById('playground')
let playgroundTexture = new THREE.VideoTexture(playgroundVideo)
let scene444Video = document.getElementById('scene444')
let scene444Texture = new THREE.VideoTexture(scene444Video)
let pictureVideo = document.getElementById('picture')
let pictureTexture = new THREE.VideoTexture(pictureVideo)
let lightMouseVideo = document.getElementById('lightMouse')
let lightMouseTexture = new THREE.VideoTexture(lightMouseVideo)
let scene78Video = document.getElementById('scene78')
let scene78Texture = new THREE.VideoTexture(scene78Video)
let scene8Video = document.getElementById('scene8')
let scene8Texture = new THREE.VideoTexture(scene8Video)
let finalVideo = document.getElementById('final')
let finalTexture = new THREE.VideoTexture(finalVideo)
let ourselvesVideo = document.getElementById('ourselves')
let ourselvesTexture = new THREE.VideoTexture(ourselvesVideo)

let TVButton = new THREE.TextureLoader().load('image/2222.png')
let TVSVideo = document.getElementById('TVS')
let TVS = new THREE.VideoTexture(TVSVideo)
let TVBackground = new THREE.TextureLoader().load('image/chuang.png')
let alphaMap = new THREE.TextureLoader().load("image/pngpng.png")
let finalBorder = new THREE.TextureLoader().load('image/ddd/finalPNG.png')




let planeGeo1 = new THREE.PlaneGeometry(8.6,4.84,100,100)
let planeGeo2 = new THREE.PlaneGeometry(8.6,4.84)
let planeGeo3 = new THREE.PlaneGeometry(8.6,4.84)
let planeGeo4 = new THREE.PlaneGeometry(8.6,4.84)
let planeGeo5 = new THREE.PlaneGeometry(8.6,4.84)
let planeGeo6 = new THREE.PlaneGeometry(8.6,4.84,100,100)
let planeGeo7 = new THREE.PlaneGeometry(6.4/1.3,4.8/1.3)
let planeGeo71 = new THREE.PlaneGeometry(8.6/8,4.84/8)
let planeGeo72 = new THREE.PlaneGeometry(8.6/1.5,4.84/1.5)
let planeGeo73 = new THREE.PlaneGeometry(8.6,4.84)

let planeGeo8 = new THREE.PlaneGeometry(8.6,4.84)
let planeGeo9 = new THREE.PlaneGeometry(8.6,4.84)
let planeGeo10 = new THREE.PlaneGeometry(6.4*1.2,4.8*1.2)
let planeGeo101 = new THREE.PlaneGeometry(8.6,4.84)/////////
let planeGeo11 = new THREE.PlaneGeometry(8.6,4.84)/////////
let planeGeo12 = new THREE.PlaneGeometry(9.6,4.84)


let planeMat1 = new THREE.MeshLambertMaterial({map: flashTxeture})
let planeMat2 = new THREE.MeshBasicMaterial({map: ticketTxeture})
let planeMat3 = new THREE.MeshBasicMaterial({map: playgroundTexture})
let planeMat4 = new THREE.MeshBasicMaterial({map: scene444Texture})
let planeMat5 = new THREE.MeshBasicMaterial({map: pictureTexture})
let planeMat6 = new THREE.MeshLambertMaterial({color: 0x474747, map: lightMouseTexture})
let planeMat7 = new THREE.MeshBasicMaterial({map: CameraTexture})
let planeMat71 = new THREE.MeshBasicMaterial({map: TVButton, transparent: true})
let planeMat72 = new THREE.MeshBasicMaterial({map: TVS, transparent: true, alphaMap : alphaMap})
let planeMat73 = new THREE.MeshBasicMaterial({map: TVBackground, transparent: true})

let planeMat8 = new THREE.MeshBasicMaterial({map: scene78Texture})
let planeMat9 = new THREE.MeshBasicMaterial({map: scene8Texture})
let planeMat10 = new THREE.MeshBasicMaterial({map: CameraTexture})
let planeMat101 = new THREE.MeshBasicMaterial({map: finalBorder, transparent: true})
let planeMat11 = new THREE.MeshBasicMaterial({map: finalTexture})
let planeMat12 = new THREE.MeshBasicMaterial({map: ourselvesTexture})


let plane1 = new THREE.Mesh(planeGeo1,planeMat1)
let plane2 = new THREE.Mesh(planeGeo2,planeMat2)
let plane3 = new THREE.Mesh(planeGeo3,planeMat3)
let plane4 = new THREE.Mesh(planeGeo4,planeMat4)
let plane5 = new THREE.Mesh(planeGeo5,planeMat5)
let plane6 = new THREE.Mesh(planeGeo6,planeMat6)
let plane7 = new THREE.Mesh(planeGeo7,planeMat7)
let plane71 = new THREE.Mesh(planeGeo71,planeMat71)
let plane72 = new THREE.Mesh(planeGeo72,planeMat72)
let plane73 = new THREE.Mesh(planeGeo73,planeMat73)

let plane8 = new THREE.Mesh(planeGeo8,planeMat8)
let plane9 = new THREE.Mesh(planeGeo9,planeMat9)
let plane10 = new THREE.Mesh(planeGeo10,planeMat10)
let plane101 = new THREE.Mesh(planeGeo101,planeMat101)
let plane11 = new THREE.Mesh(planeGeo11,planeMat11)
let plane12 = new THREE.Mesh(planeGeo12,planeMat12)


plane1.position.z = 0.01
plane2.position.z = -29.99
plane3.position.z = -59.99
plane4.position.z = -89.99
plane5.position.z = -119.99
plane6.position.z = -149.99
plane7.position.z = -179.99
plane71.position.z = -179.70
plane71.position.y = -1.4
plane71.position.x = 0.4
plane72.position.z = -179.80
plane72.position.y = -0.9
plane73.position.z = -179.90

plane8.position.z = -209.99
plane9.position.z = -239.99
plane10.position.z = -269.99
plane101.position.z = -269.89
plane11.position.z = -299.99
plane12.position.z = -329.99



scene.add(plane1)
scene.add(plane2)
scene.add(plane3)
scene.add(plane4)
scene.add(plane5)
scene.add(plane6)
scene.add(plane7)
scene.add(plane71)
scene.add(plane72)
scene.add(plane73)
scene.add(plane8)
scene.add(plane9)
scene.add(plane10)
scene.add(plane101)
scene.add(plane11)
scene.add(plane12)




// ============================================   材质模型结束   ========================================

// ============================================   灯光   ========================================

// 灯光
let ambientLight = new THREE.AmbientLight(0xFFFFFF)
scene.add(ambientLight)
// let directionalLight = new THREE.DirectionalLight(0xFFFFFF)
// scene.add(directionalLight)
let spotLight = new THREE.SpotLight(0xffffff,1,30, Math.PI/10, 1)
spotLight.position.set(0,0,-145)
spotLight.power = 20
scene.add(spotLight)
// let spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper)


// ============================================   灯光结束   ========================================

// ============================================   相机和mainGroup   ========================================


// 新建相机
let camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 200 )
camera.position.set( 0, 0, 10)


// 创建相机和相机目标的共同父级
let mainGroup = new THREE.Group()

mainGroup.position.z = -5
// mainGroup.position.y = 10
mainGroup.add(camera)
mainGroup.add(black)
mainGroup.add(black1)
mainGroup.add(black2)
mainGroup.add(black3)
mainGroup.add(black4)
mainGroup.add(black5)
mainGroup.add(black6)


console.log(mainGroup.position.z)
console.log(camera.position)

scene.add(mainGroup)
// 将相机群组添加到场景

// ============================================   end   ========================================

// =========================================   来点平面工作   ====================================
let items = document.getElementsByClassName('item')
let soundsURL = [
    'sound/didasheng1.mp3',
    'sound/gewu1.mp3',
    'sound/gewu2.mp3',
    'sound/hulusheng2.mp3',
    'sound/hulusheng3.mp3',
    'sound/shuohuasheng1.mp3',
    'sound/shuohuasheng2.mp3'
]
console.log(items.length)
for (let index = 0; index < items.length; index = (index + 1)) {
    let cell = items[index]
  
    
    let audio = document.createElement('audio')
    audio.src = soundsURL[index]
    
  
    cell.addEventListener('mousedown', function (event) {
      audio.play()
    })
  }

let TaiCi = document.getElementById('taici')
let musiccc = document.getElementById('TVbutton')
musiccc.classList.add('dispear')

musiccc.addEventListener('mousedown',function(){
    TaiCi.play()
    console.log('hahah')
})

let scene8ELE =false
let scene8Done = document.getElementById('scene8Done')
scene8Done.classList.add('dispear')
scene8Done.addEventListener('mousedown',function(){
    scene8ELE = true
})
let AnimationCTRL = document.getElementById('animationCTRL')
    AnimationCTRL.classList.add('dispear')

// =========================================   平面工作结束   =====================================

// ============================================   交互和动作   ========================================



// 从这开始, 相机移动
let iSaidGo = true

let shit = false

let newOne = false


// new
let playgroundSwitch = true
let scene444Switch = true
// 监听按钮哒
let clickbutton = false
// 给输入的文本存储进一个变量
let myname


function mouseDown(){
    clickbutton = true
    console.log(clickbutton)
    startSwitch = true
    texts.classList.add('dispear')
    
}
let Finallll = false
let pictureDone = false
let scene1 = true

let startSwitch5 = true
let startSwitch4 = true
let startSwitch3 = true
let startSwitch2 = true
let startSwitch1 = true
let startSwitch = true
let bools = false
let bool = false


let playgroundEnded = false
// 监听游乐场的视频“播放结束”事件
let elevideo = document.getElementById("playground");
elevideo.addEventListener('ended', function () { //结束
    playgroundEnded =true
    console.log(playgroundEnded);
})
// 监听scene444的视频“播放结束”事件
let scene444Ended = false
let elevideo1 = document.getElementById("scene444");
elevideo1.addEventListener('ended', function () { //结束
    scene444Ended =true
    console.log(scene444Ended);
})

let musicEnded = false
TaiCi.addEventListener('ended',function(){
    musicEnded = true
    console.log(musicEnded);

})
let scene78Ended = false
let sceneSeven = document.getElementById('scene78')
sceneSeven.addEventListener('ended',function(){
    scene78Ended = true
    console.log('endedTTTrue')
})

let scene8Ended = false
let scene8 = document.getElementById('scene8')
scene8.addEventListener('ended',function(){
    scene8Ended = true
})
let finalEnded = false
document.getElementById('final').addEventListener('ended', function(){
    finalEnded = true
})

document.getElementById('notItem').addEventListener('mousedown', function(){
    pictureDone = true
})

// 老子一点左键bool就是true
console.log(bool)
document.getElementById('webgl-canvas').addEventListener('mousedown', function(){
    bool = true
    bools = true
    console.log(bool)
})
// 默认消失
let texts = document.getElementById('text')
texts.classList.add('dispear')

let pressAudio = document.getElementById('music')
pressAudio.classList.add('dispear')

// texts.classList.remove('')


// 需要定义下每一个绝对位置吗
// 给绝对位置定义为P00X
// 给判断位置定义为P00XA
// ?怎样

let P001 = -35
let P001A = -34.9
let P002 = -65
let P003 = -95
let P004 = -125
let P005 = -155
let P005A = -154.9
let P006 = -185
let P007 = -215
let P008 = -245
let P009 = -275
let P010 = -305
let P011 = -335

// well, thanks
function test(){
    // 开场点击屏幕触发黑屏
    if(bool === true && startSwitch === true && scene1 === true && blackMat.opacity < 1.6 && mainGroup.position.z >= P001){
        blackMat.opacity += 0.01
        console.log(blackMat.opacity)
    }
    // 自动退出黑屏机制
    if (blackMat.opacity>1.6){
        startSwitch = false
    }
    // 位置移动到车票,显示输入画板
    if(blackMat.opacity > 1.5 && blackMat.opacity <1.51 && mainGroup.position.z === -5){
        mainGroup.position.z = P001
        texts.classList.remove('dispear')
    }
    // 自动退出黑屏机制2
    if(blackMat.opacity > -0.1 && startSwitch === false){
        blackMat.opacity -= 0.01
        console.log(blackMat.opacity)
    }
    // 输入完名字点击OK后
    if(clickbutton === true && startSwitch === true && blackMat.opacity < 1.6 && mainGroup.position.z >=P002){
        scene1 = false //第一场彻底关闭
        myname = document.getElementById('myName').value
        document.getElementById('changeName').innerText = myname
        console.log(myname)
        blackMat.opacity += 0.01
        bool = false

    }
    // 位置移动到_____啥
    if(scene1 === false && blackMat.opacity > 1.5 && blackMat.opacity <1.51 && mainGroup.position.z === P001){
        mainGroup.position.z = P002
        bool = false
    }
    if(blackMat.opacity<0.0 && mainGroup.position.z === P002){
        clickbutton = false
    }
    // 自动播放进入游乐场视频 然后不会自动循环
    if(playgroundSwitch === true && mainGroup.position.z ===P002 ){
        document.getElementById('playground').play()
        console.log(startSwitch)
        playgroundSwitch = false
    }
    if(playgroundEnded === true && startSwitch1 === true ){
        blackMat1.opacity += 0.01
        console.log(blackMat1.opacity)
    }
    // 自动退出黑屏1
    if (blackMat1.opacity>1.6){
        startSwitch1 = false
    }
    // 移动到场景4
    if(blackMat1.opacity > 1.5 && blackMat1.opacity <1.51 && mainGroup.position.z === P002){
        mainGroup.position.z = P003
        
    }
    // 自动退出黑屏111
    if(blackMat1.opacity > -0.1 && startSwitch1 === false){
        blackMat1.opacity -= 0.01
        console.log(blackMat1.opacity)
    }
    // 场4视频播放
    if(scene444Switch === true && mainGroup.position.z ===P003 ){
        document.getElementById('scene444').play()
        document.getElementById('text2').classList.remove('dispear')
        console.log(startSwitch)
        scene444Switch = false
    }
    // 场4视频结束
    if(scene444Ended ===true && startSwitch2 === true){
        document.getElementById('text2').classList.add('dispear')
        blackMat2.opacity +=0.01
        console.log(blackMat2.opacity)
    }
    // 自动退出黑屏3
    if (blackMat2.opacity>1.6){
        startSwitch2 = false
    }
    // 启用声音交互板
    if(blackMat2.opacity > 1.5 && blackMat2.opacity <1.51 && mainGroup.position.z === P003){
        mainGroup.position.z = P004
        pressAudio.classList.remove('dispear')
    }
    // 自动退出黑屏3
    if(blackMat2.opacity > -0.1 && startSwitch2 === false){
        blackMat2.opacity -= 0.01
        console.log(blackMat2.opacity)
    }
    // p005
    if(pictureDone === true && mainGroup.position.z >=P005A){
        mainGroup.position.z -=0.08
        console.log(mainGroup.position.z)
        pressAudio.classList.add('dispear')
        bools = false
    }
    // done
    if(mainGroup.position.z >= P005 && mainGroup.position.z <= P005A){
        pictureDone = false
        mainGroup.position.z =P005
        console.log('')
        
    }

    if(bools === true && startSwitch3 === true && mainGroup.position.z >= P006 && mainGroup.position.z <= P005){
        blackMat3.opacity += 0.01
        console.log(blackMat3.opacity)
    }

    // 自动退出黑屏4
    if (blackMat3.opacity > 1.6){
        startSwitch3 = false
    }
    // to P006
    if(blackMat3.opacity > 1.5 && blackMat3.opacity <1.51 && mainGroup.position.z === P005){
        mainGroup.position.z = P006
        musiccc.classList.remove('dispear')
    }
    // 自动退出黑屏4
    if(blackMat3.opacity > -0.1 && startSwitch3 === false){
        blackMat3.opacity -= 0.01
        console.log(blackMat3.opacity)
    }
    if(musicEnded === true && mainGroup.position.z === P006){
        musiccc.classList.add('dispear')
        mainGroup.position.z = P007
        sceneSeven.play()
        musicEnded = false
        console.log('gg')
    }
    // scene 888
    if(scene78Ended === true && mainGroup.position.z === P007){
        mainGroup.position.z =P008
        scene8.play()
        scene78Ended = false
        console.log(scene78Ended)
        scene8Done.classList.remove('dispear')
        
    }
    if(scene8ELE === true && startSwitch4 === true && mainGroup.position.z >= P009 && mainGroup.position.z <= P008){
        blackMat4.opacity += 0.01
        console.log(blackMat4.opacity)
        scene8Done.classList.add('dispear')
    }
    // zhuanchang
    if (blackMat4.opacity > 1.6){
        startSwitch4 = false
    }
    if(blackMat4.opacity > 1.5 && blackMat4.opacity <1.51 && mainGroup.position.z === P008){
        mainGroup.position.z = P009
        // 交互都在这
        AnimationCTRL.classList.remove('dispear')
    }
    if(blackMat4.opacity > -0.1 && startSwitch4 === false){
        blackMat4.opacity -= 0.01
        console.log(blackMat4.opacity)
    }
    if(bool === true && Finallll === true && startSwitch5 === true && mainGroup.position.z >= P010 && mainGroup.position.z <= P009 ){
        blackMat5.opacity += 0.01
        console.log(blackMat5.opacity)
    }
    if (blackMat5.opacity > 1.6){
        startSwitch5 = false
    }
    if(blackMat5.opacity > 1.5 && blackMat5.opacity <1.51 && mainGroup.position.z === P009){
        mainGroup.position.z = P010
        document.getElementById('final').play()
    }
    if(blackMat5.opacity > -0.1 && startSwitch5 === false){
        blackMat5.opacity -= 0.01
        console.log(blackMat5.opacity)
    }
    if(finalEnded === true ){
        mainGroup.position.z = P011
        document.getElementById('ourselves').play()
        finalEnded = false
    }
    


  




    // if(bool === true && mainGroup.position.z ===P002){
    //     document.getElementById('text2').classList.remove('dispear')

    // }

    requestAnimationFrame(test)
}
test()
// 到这结束场景相机移动
// ============================================   交互动作结束   ========================================

// ============================================   射线   ========================================


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	// 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
window.addEventListener( 'mousemove', onMouseMove, false );

// window.requestAnimationFrame(render);

// ============================================   射线x   ========================================

// ============================================   相机交互  ========================================


// 鼠标参数格式化
let mouseX = 0;
let mouseY = 0;

document.addEventListener( 'mousemove', onDocumentMouseMove, false )

let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2

function onDocumentMouseMove( event ) {
  mouseX = ( event.clientX - windowHalfX ) / 100
  mouseY = ( event.clientY - windowHalfY ) / 100
}

// ============================================   相机交互x   ========================================

// ============================================   外部模型和动画导入   ========================================

let mixer
// 创建GLTF加载器
function init(){
    let loader = new THREE.GLTFLoader()
    loader.load( 'blender_threeJS/Text01.gltf', function( gltf ){
        let model = gltf.scene
        scene.add(model)
        mixer = new THREE.AnimationMixer(model)
        AnimationCTRL.addEventListener('mousedown',function(){

            mixer.clipAction(gltf.animations[0,1]).play()
            console.log(mixer)
            let animation = mixer.clipAction(gltf.animations[0])
            let animation1 = mixer.clipAction(gltf.animations[1])
            console.log(animation)
            console.log(animation1)

            animation.setLoop( THREE.LoopOnce )
            animation1.setLoop( THREE.LoopOnce )
            animation.clampWhenFinished = true
            animation1.clampWhenFinished = true
            animation.play()
            animation1.play()
            AnimationCTRL.classList.add('dispear')
            console.log('yeah!')
            console.log('its open')
            Finallll = true
            bool = false
        })
    })
}
init()

// ============================================   外部模型动画导入结束   ========================================

// ============================================   resize window   ========================================


// 窗口重置 
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {

    renderer.setSize( window.innerWidth, window.innerHeight );

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
// ============================================   resize window end   ========================================

let sometarget = new THREE.Object3D()
scene.add(sometarget)   

let adjust = 0.05
function render(){
    // 通过摄像机和鼠标位置更新射线
	raycaster.setFromCamera( mouse, camera );
    
    if(mainGroup.position.z === P005){
        // 计算物体和射线的焦点
    let intersects = raycaster.intersectObjects( scene.children );
    let targtpoint = intersects[0].point
    console.log(targtpoint)
    
    sometarget.position.set(targtpoint.x, targtpoint.y, targtpoint.z)
    console.log(spotLight.position)
    spotLight.target = sometarget

    }
    




    renderer.render(scene, camera)
    camera.position.x += ( -mouseX - camera.position.x ) * adjust;
    camera.position.y += (  mouseY - camera.position.y ) * adjust;
    camera.lookAt(mainGroup.position)
// 现在写的东西是不是只适用于mac的高分辨率屏幕?
    let changeY = 0.3
    let changeX = 1.2

    if (camera.position.y> changeY){
        camera.position.y = changeY
    }

    if (camera.position.y< -changeY){
        camera.position.y = -changeY
    }
    if (camera.position.x< -changeX){
        camera.position.x = -changeX
    }
    if (camera.position.x> changeX){
        camera.position.x = changeX
    }

    // console.log(camera.position.x)
    // console.log(camera.position.y)
    // console.log(mainGroup.position.z)
    requestAnimationFrame(render)
}
render()

let clock = new THREE.Clock()
function animate() {
    requestAnimationFrame( animate )
    let time = clock.getDelta()
    if (mixer) {
        mixer.update(time)
    }
  }
  animate()
