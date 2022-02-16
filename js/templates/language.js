
// var langTypeS=(navigator.language || navigator.browserLanguage).toLowerCase()

var langTypeS='zh-cn'
if(window.location.href.split('?')[1]=='En'){
    langTypeS=''
}else {
    langTypeS='zh-cn'
}

function _mx(vax) {
    for (i in langList){
        if(i==vax){
            if(langTypeS=='zh-cn'){
                return langList[i]
            }else {
                return i
            }
        }
    }
    return vax
}

function getHtmlLang() {
    let list=$('[lang-data-ht]')
    for(i in langList){
        for (let m=0;m<list.length;m++){
           if(i==$(list[m]).attr('lang-data-ht')){
               if(langTypeS=='zh-cn'){

                   $(list[m]).html(langList[i])
               }else {

                   $(list[m]).html(i)
               }
           }
        }
    }
}
function getHtmlHelpLang() {
    let list=$('[lang-data-ht2]')
    for(i in langHelp){
        for (let m=0;m<list.length;m++){
           if(i==$(list[m]).attr('lang-data-ht2')){
               if(langTypeS=='zh-cn'){
                   $(list[m]).html(langHelp[i])
               }else {
                   $(list[m]).html(i)
               }
           }
        }
    }
}

var langList={
    'Read more':'查看文档',
    'Step 1':'第一步',
    'Step 2':'第二步',
    'Step 3':'第三步',
    'Please complete the relevant configuration in the pop-up page':'请在弹出的网页内完成相关配置',
    'After installation':'安装完成后',
    'The program will run on the tray':'程序会在托盘运行',
    'Please wait patiently for the installation to complete':'请耐心等待安装完成',
    'When the download is complete, run the program':'下载完成后，运行程序',
    'Go to configuration':'前往配置',
    'AMining is performing installation, please wait...':'A矿工正在执行安装，请稍后...',
    'Determine configuration':'确定配置',
    'After configuration, the system will listen to and connect the miner through the server':'配置后，系统会通过服务器监听并连接矿机',
    'Test connection':'测试连接',
    'Please enter server IP address':'请输入服务器Ip地址',
    'Please complete the final configuration before starting':'开始前请完成最后的配置',
    'Thank you for your installation':'感谢您的安装',
    'Download not responding?':'下载没有反应？',
    'Do not close this page':'请勿关闭此页面',
    'Thank! Download in progress':'感谢！下载正在进行',
    'Help documents':'帮助文档',
    'Help video':'帮助视频',
    'Describes how to obtain the desired data and the corresponding chart content through the dashboard':'介绍如何通过后台获得想要的数据，以及对应的图表内容。',
    'Data monitoring and charting':'数据监控和图表',
    'Introducing the overclocking of the mining workers, the operation details of overfrequency operation and some basic operations.':'介绍矿机的的超频参数介绍，和超频操作细节，以及矿机一些基本操作的处理办法',
    'Mining machine overfrequency and management':'矿机超频与管理',
    'Describes how to configure the environment and install AMining.':'介绍如何配置环境以及安装A矿工',
    'How to install':'如何安装',
    'Help center':'帮助中心',
    'All software':'全部版本',
    'Explore single-user version':'探索单机版',
    'Explore multi-mining version':'探索场所版',
    'Mining monitoring and management':'挖矿监测和管理',
    'Please select the product you want to know':'请选择您想了解的产品',
    'Software':"产品介绍",
    'Go to help center':'前往帮助中心',
    'You can visit the help center!':'您可以前往帮助中心进行查找！',
    'Cannot find the problem you were looking for?':'没有找到您想找的问题？',
    'Yes, we do. Ethpill is used automatically and must be removed in case you donot want to use it. AMD Memory Tweak can be set up through the web dashboard or through the console and by setting the REF parameter to ~30, you can activate the RXBOOST.':'支持，Ethpill 是默认自动使用的，如果不用可以将其删除。通过添加参数 -rxboost 1，RXBOOST 可以与 Claymore 的 Ethash 挖矿客户端一起使用。',
    'Does AMining support Ethpill and RXBOOST?':'A矿工支持 Ethpill 和 RXBOOST 吗？',
    'Yes, AMining is currently partially open source and free.':'A矿工目前部分开源且免费。',
    'Can I use AMining for free?':'A矿工收费吗？',
    'Does AMining support mining on PC?  At present, the AMining single1-user version supports mining on PC, which supports the management of a workers.  If you want to manage more than one mining machine, please use the AMining Place edition.':'A矿工可以支持在个人电脑上挖矿吗？目前A矿工单机版支持在个人电脑上挖矿，其支持一台矿机的管理。如果您要管理多个矿机，请使用A矿工场所版。',
    'Can AMining mining on a PC?':'A矿工可以支持在个人电脑上挖矿吗？',
    'We support mining on all pools - our current database includes more than 2,000 different pools and more than 250 multi-algo pools options, including the most popular ones Ethermine, Nanopool, Mining Pool Hub, NiceHash, zpool, and others.':'我们支持所有矿池的挖矿——我们当前的数据库包括一千多个不同的矿池和二百五十多种多算法矿池选项，包括最受欢迎的 Ethermine、Nanopool、Mining Pool Hub、NiceHash、zpool 矿池等。',
    'Which pools are supported?':'A矿工支持哪些矿池？',
    'We support all the currencies for which our mining client is listed, please refer to the list of product features.':'我们支持我们列出的挖矿客户端所针对的所有币种，具体请参考产品特点中的列表。',
    'Which coins are supported?':'A矿工支持哪些币种？',
    'Officially, we donot support mixed mining rigs. In most cases, mixed rigs do work with minerstat, but they are more sensitive and have less options when tuning and optimizing.':'一般我们不建议混合不同两家GPU的矿机。但是我们支持混合矿机的使用，在超频的时候可供选择的内容会受到限制。',
    'Does AMining support mixed mining rigs (AMD & Nvidia)?':'A矿工支持Nvdia和AMD混合挖矿吗？',
    'One rig/worker can hold up to 16 GPUs. Please note that the more GPUs are in the system, the more time it takes for the rig to fully boot and start.':'一台矿机最多支持 16 个 GPU。请注意，系统中的 GPU 越多，矿机启动所需的时间就越长。',
    'How many GPUs can I have in one rig/worker?':'一台矿机最多支持多少个 GPU？',
    'Which overclocking parameters are available?':'有哪些超频参数可用？',
    'For Nvidia, you can set up parameters: power limit, core clock, memory clock, and static or automatic fans. For AMD, you can set up parameters: VDDC, VDDCI, MVDD, core clock, memory clock, core state, and static or automatic fans.':'对于 Nvidia 和 AMD，您可以设置参数：功率限制、核心频率、内存频率和风扇专属。对于 Nvidia，您还可以设置锁定核心频率，对于 AMD，您可以设置核心电压和内存电压。',
    'Get the answers to the frequently asked questions regarding the AMining':'一些关于A矿工常见的问题',
    'Frequently asked questions':'常见问题',
    'Supported clients':'客户端支持',
    'List of Supported clients for Windows':'A矿工目前挖矿客户端',
    'List of GPUs that Supported':'A矿工目前支持的GPU列表',
    'Supported hardware':'硬件支持',
    '1 GHz or faster, minimum 2 core or more 64-bit supported CPU':'1 GHz或更快，支持至少2核或更多的64位CPU',
    'Gigabit Ethernet connection or supported WiFi adapter':'千兆以太网连接或支持的 WiFi 适配器',
    '→ vcredis installed<br>→ Net Framework 4.5.2installed':'→ 安装 vcredis<br>→ 安装 Net Framework 4.5.2installed',
    'Other':'其他',
    'System':'操作系统',
    'Virtual memory':'虚拟内存',
    'Internet':'网络',
    'Drive':'硬盘',
    'Memory':'内存',
    'Recommended':'推荐配置',
    'Minimum':'最低配置',
    'Minimum and recommended system requirements for running AMining for Windows':'最低和推荐运行A矿工的系统配置要求',
    'System requirements':'系统需求',
    'through automated script configuration, system logs, etc. to assist you in dealing with problems as quickly as possible':'通过自动化脚本配置，系统日志等手段，出现问题是，以最快速度协助您处理。',
    'Intelligent problem solving means':'智能化的问题解决手段',
    'Through the dashboard, you can manage all different types of mining machines in multiple places.  Mining, overclocking, data analysis all in one platform.':'仅需通过后台，即可管理全部不同种类，多个场所的矿机。挖矿，超频，数据分析一个平台全部搞定。',
    'Multi - ore machine management':'多矿机，轻松管理',
    'Download and install AMining. After the configuration is complete, Login using the access key. Start mining with just one click':'下载并安装A矿工，配置完成后，使用访问密钥登录。只需单击一下即可开始挖矿。',
    'Easy to set up':'易于上手，快速开始',
    'coins':'支持的加密货币币种',
    'pools':'支持的加密货币矿池',
    'mining clients':'支持的挖矿客户端',
    'Nvidia & AMD GPUs':'支持的 Nvdia 和 AMD GPU',
    'Product introduction':'产品简介',
    'It supports mining pool mining of more than 100 cryptocurrencies, and supports monitoring and management of multi-mining machine and multi-currency mining.':'支持百余种加密货币的矿池挖矿，支持多矿机多币种挖矿的监控与管理。',
    'Support multiple coins':'多加密币种支持',
    'Compatible with most mainstream AMD and nvdia graphics cards':'兼容世面上大部分主流的AMD以及NVDIA矿卡。',
    'AMD/NVDIA supported':'AMD/NVDIA 多矿卡支持',
    'Support the mining management of single and multi miner, and make different function optimization for different scenarios, which is convenient for users.':'支持面向个人的单机挖矿，以及面向场所的多矿机挖矿管理，针对不同场景做出不同功能优化，方便用户使用。',
    'single1-user/multi-mining':'单机/多场所挖矿',
    'Everything you need - in one dashboard':'无缝加密货币挖掘所需的一切',
    'Multi-environment compatibility':'多环境兼容',
    'Customize the system detection status, and initiate early warning and notification through e-mail without missing any important information.':'自定义系统检测状态，并且通过电子邮件发起预警和通知，不错过任何一项重要的信息。',
    'Smart alerts':'智能提醒',
    'By configuring multiple users, you can better manage and distribute the management of mining machines. The simple and easy-to-use permission configuration allows you not to worry about the management of mining machines.':'通过配置多用户，可以方便您更好的管理和分配矿机的管理。简单易用的权限配置，让你无需为矿机的管理而担心。',
    'Simple multi-user management':'简单的多用户管理',
    'Through detailed system log, intelligent error trigger, quickly locate the errors, and help you deal with errors in the shortest time.':'通过详细的系统日志，智能的错误触发扳机，快速定位故障所在，用最短的时间协助您处理错误和故障。',
    'Intelligent troubleshooting':'智能故障排除',
    'The system supports configuring customized data monitoring and trigger condition scripts. Most operations do not need to be done by the user. A simple configuration allows the system to complete repeated operations for you.':'系统支持配置自定义的数据监测和触发条件脚本。大部分操作不必用户亲力亲为，一个简单的配置即可让系统代您完成重复的操作。',
    'Automated system operations':'自动化的系统操作',
    'By integrating the data records and feedback of the system, you can quickly find, manage and operate mining machines through detailed and clear data charts, and fast interaction allows you to perform specified complex operations more efficiently.':'通过整合系统的数据记录与反馈，您可以通过详细清晰的数据图表快查找，管理和操作矿机，快捷交互让你更有效率的的执行指定的复杂操作。',
    'Clear diagrams and interactions':'清晰的图表与交互',
    'AMining provides you with intuitive and convenient overclocking management, provides templates and reference values, and reduces the configuration threshold. Optimize your miner efficiency by adjusting CPU frequency, voltage and other parameters. Efficient and professional.':'A矿工为您提供直观便捷的超频管理，提供模板和参考数值，降低配置门槛。通过调整CPU的频率和电压等参数，优化您的矿机效率。高效、专业。',
    'Convenient overclocking management':'便捷的超频管理',
    'All you need is one piece of software':'所有你需要的，一个软件就全部搞定',
    'Learn more':'了解更多',
    'Product features':'产品亮点',
    'Download now':'立即下载',
    'Download':'点击下载',
    'AMining':'A矿工',
    'It\'s never been easier to manage your mining machine':'从未如此轻松的管理您的矿机',
    'FAQ':'常见问题',
    'Contact Us':'联系我们',
    'Help':'帮助中心',
    'Home':'首页',
    'Product':'产品',
    'Place-server version':'场所版-服务端',
    'Place-client version':'场所版-客户端',
    'Standalone version':'单机版',
    'This is the client installer of AMining site version. You need to install the server program first.':'此为A矿工场所版的客户端安装程序，需要先安装服务器程序。',
    'Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, can manage multiple mining machines in multiple mines at the same time, and supports mixed management of different platforms.':'适用于Windows Nvidia和AMD GPU平台的GUI挖掘软件。适合矿场使用，能同时管理多个矿场的多种矿机，支持不同平台混合管理。',
    'Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, only can manage one workers.':'适用于Windows Nvidia和AMD GPU平台的GUI挖掘软件。适合单用户使用，同时只能管理一台矿机。',
}

var langHelp={
    'Introduction':'入门',
    'Help documentation':'帮助文档',
    'Download':'下载',
    'Click "download now" to enter the product selection page, or click "product" on the navigation bar at the top of the official website':'通过点击官网的“立即下载”进入产品选择页面，或者点击官网顶部导航栏的“产品”',
    'There are three products available for download to cope with different mining scenarios:':'一共有三种产品可供下载，以应对不同的挖矿场景：',
    'Stand alone version:':'单机版：',
    'Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, only can manage one workers.':'适用于单台矿机挖矿',
    'Place-server edition:':'场所版：',
    'Graphical mining software for windows NVIDIA and AMD GPU platforms. It is suitable for mines, can manage multiple mining machines in multiple mines at the same time, and supports mixed management of different platforms.':'适用于多矿机挖矿',
    'Place-client version:':'场所版客户端：',
    'This is the client installer of AMining site version. You need to install the server program first.':'需要将场所版客户端下发到各个矿机上，以便场所版服务端能管理各个矿机',
    'Install the server':'安装服务端',
    'After downloading the server application, then run the installation file and wait for the installation program to complete:':'完成下载单机版或者场所版的安装程序后，运行安装文件，并等待安装程序完成：',
    'After installation, you can find the icon of the installer in the status bar of the system:':'安装完成后，您可以在系统的状态栏找到安装程序的图标：',
    'Click "enter web management" to enter the local server control page':'点击“进入WEB管理”进入本地服务端控制页面',
    '(Note: the access to the server control page may be blocked by the browser, and you can continue to access it.)':'（注意：服务端控制页面的访问可能会被浏览器拦截，允许继续访问即可）',
    'First, you need to set a login key, which will be used as a credential for the current server login. Please pay attention to keeping it.':'首先需要设置一个登录key，此key将作为当前服务端登录的一个凭证，请注意保管。',
    'After the configuration is completed, enter the key just set again to complete the login.':'配置完成后，再次输入一遍刚才设置的key即可完成登录。',
    'So far, the installation and configuration of stand-alone version and site version have been basically completed.':'至此单机版和场所版的安装配置已基本完成。',
    'Configuation the site':'配置场所',
    'After completing the installation of the server program and entering the service degree web management page, the page will display the "console" tab of the sidebar by default, in which you can see the system prompt that you need to create a "site" (place refers to the mine). Click new site, or click "site management" in the sidebar to enter the site configuration page':'完成服务端程序安装后，进入服务度web管理页面后，页面会默认显示侧边栏的“控制台”选项卡，其中可以看到系统提示需要新建一个“场所”（场所即代指矿场）。点击新建场所，或者点击侧边栏的“场所管理”进入场所配置页面',
    'Click the "Add new site" button in the upper right corner to create a new site':'点击右上角的“新建场所”按钮来新建场所',
    'You can configure the name of the site and the relevant settings of mining and pumping proportion for other personnel such as site server builders (if not, you need to set the pumping proportion amount to 0). Click Save to create a site successfully.':'可以在此处配置场所的名称，以及针对场所服务器搭建者等其他人员的挖矿抽成比例相关设置（如果没有则需要将抽成比例数额设为0），点击保存后保即成功创建一个场所。',
    'So far, the installation program of the server has been basically completed':'至此，服务端的安装程序已经基本完成',
    'Configuration the workers':'配置矿机',
    'After the service side has been installed, it is necessary to start deploying the miners.':'服务端安装完毕后，需要开始部署矿机。',
    'First you need to download the client installation package for the mine (you can go to the official website to download it). After downloading, you can see a compressed package:':'首先需要先下载矿机的客户端安装包（可以前往官网下载）。下载完毕后，你可以看到一个压缩包：',
    'First, configure "config.ini" file':'首先需要配置config.ini文件：',
    'Clintkey: In the previous site management, click on the "Get Key" button of the corresponding site and paste it':'Clintkey：需要在之前的场所管理中，点击对应场场所的“复制Key”按钮并粘贴',
    'Next comes port configuration:In the status bar, right-click the server icon and select Open Directory':'接下来是端口配置：在状态栏中，右键点服务端图标，选择打开目录',
    'In the directory, open the "Config" file':'在目录中，打开Config文件',
    'There are port configurations related to the current server side. Make sure that the corresponding ports are mapped and consistent with the client port configuration.':'其中就有当前服务端的相关端口配置，请确保对应端口已经做好映射，并与客户端端口配置保持一致。',
    'Once the configuration is complete, the configuration file and the client program can be sent down to each client, run, and then restart the server, so that the installation and configuration of the whole mine is completed.':'配置完毕后，即可将配置文件和客户端程序一起下发到各个客户端，并运行，之后再重启服务端，这样整个矿机的安装与配置就已完成。',
    'Basic configuration of site and workers':'场所和矿机的基本配置',
    'All mining machines in the site can be operated in batches by applying templates, and the template related configurations are in "Config templates" in the sidebar. The following will introduce functions of each template configuration.':'场所中所有的矿机都可以通过套用模板的方式进行批量操作，模板相关的配置都在侧边栏的“模板配置”中。下面将为你逐一介绍各个模板配置的功能和作用。',
    'Config templates':'配置模板',
    'Worker Config':'挖矿配置',
    'In this template, you can set the currency, pool address and wallet Address of the mining machine. After saving.':'在此模板中，可以设置模板中矿机所挖的币种，矿池地址以及指定的钱包，保存后即存为模板。',
    'Setting':'基础配置',
    'First, click "add new Trmplate" in the upper right corner to add a new basic configuration template':'首先通过点击右上角的“添加新配置”来增加新的基础配置模板',
    'In "Setting", you can modify some basic configurations for all mining machines in the same field':'在“基础配置”中，您可以针对同一个场所有矿机的进行一些基础配置的修改',
    'The first is the related configuration of computer status':'首先是电脑状态的相关配置',
    '(descriptions of all functions have been added to the interface)':'（所有功能的说明已经加入到界面中）',
    'E-mail':'邮箱',
    'In the automatic warning function, if the alarm is triggered, the system will send the specified warning to the specified mailbox':'在自动预警的功能中，如果触发了报警器，系统会将指定警告发送到指定邮箱',
    'Auto':'自动化',
    'Automation is a trigger that executes an operation after certain conditions are met. It allows you to automatically perform some operations you want in the case of miner state, console operation change, etc.':'自动化是一种在达成一定条件后执行某项操作的触发器，它允许你在矿机状态、控制台操作更改等情况下自动执行一些你想要的操作。',
    'Overclocking':'超频配置',
    "*Note: overclocking is a professional operation. If you don't know about overclocking, we don't recommend you to do it.":'*注意：超频属于专业操作，如果您对超频不了解，我们不建议您进行超频操作。',
    'Click "Config Templates" in the sidebar, and then select the "overclocking " tab to start configuring a new overclocking template.':'点击侧边栏的“模板配置”，然后选择“超频配置”选项卡，即可开始配置新的超频模板。',
    'The overclocking template of miner a follows the type of graphics card for overclocking. For example, if an overclocking file of 3060ti is configured, all overclocking files installed with 3060ti will be overclocked according to the configuration of the overclocking template.':'A矿工的超频模板是跟进显卡类型进行超频的。比如配置一个3060ti的超频文件，则所有安装有3060ti的超频文件都会按照超频模板的配置进行超频运行。',
    'First select the name of a graphics card that needs overclocking':'首先选择一个需要超频的显卡名称',
    'Then you need to fine tune the overclocking parameters according to your needs':'接着您需要根据需求来完成超频参数的微调',
    "If you don't know how to start, you can configure some of our preset overclocking parameters by clicking 'Append values'":'如果您不知道如何下手，可以通过点击“快速填充”来配置我们预设好的一些超频参数',
    'Click save after configuration. The configuration will take effect after restarting the server and client.':'配置完毕后点击保存，重启服务端后和客户机后配置即生效。',
    'Templates for workers':'矿机套用模板',
    'After the template configuration is completed, you can go to the miner configuration to apply the template to the miner.':'模板配置完毕后，可以前往矿机配置中将模板套用到矿机中。',
    'You can add applied objects (sites or mining machines in sites) in the mining machine option':'可以在“矿机”选项中，添加套用的对象（场所或者场所中的矿机）',
    'Then specify the template corresponding to each function. After saving, the specified mining machine will operate according to the template (some template functions need to restart the server / client to take effect).':'接着指定各个功能所对应的模板。保存后，指定的矿机将按照模板执行操作（部分模板功能需要重启服务端/客户端生效）。',
    'Preface':'前言',
    'In order to facilitate users to intuitively see the mining revenue data and conveniently manage the status of each mining machine, A Miner provide rich and convenient management entry data charts. Next, we will show you how to view and operate the miner and view these data charts':'为了方便用户直观的看到挖矿收益数据，便捷管理各个矿机的状态，A矿工提供了丰富便捷的管理入口数据图表。接下来，我们将为您介绍如何查看和操作矿机，以及查看这些数据图表。',
    'Console':'控制台',
    'The console is the default stay page of the server, where you can overview the status of each mining machine in all places.':'控制台是服务端的默认停留页面，在这里您可以总览所有场所下各个矿机的状态。',
    'You can switch and search sites through the site list and click to view all mining machines under the site.':'您可以通过场所列表切换、搜索场所，并点击查看该场所下所有矿机。',
    'This is the status card of a single miner in a site. The top displays the worker’s number (computer name), machine status, continuous mining time and relevant data of hashrate.':'此为某场所内单个矿机的状态卡片，顶部显示的是机器编号（计算机名称）、机器状态、持续挖矿的时间以及算力相关数据。',
    'The status is  contains:':'其中状态分为：',

    'Normal:':'正常：',
    'the worker is mining normally.':'矿机正常挖矿',

    'Part work:':'忙时工作：矿机边挖矿边执行其他程序',
    'the worker performs other procedures while mining.':'矿机边挖矿边执行其他程序',

    'Occupied:':'游戏中：',
    'the worker is executing other programs and suspending mining.':'矿机正在执行其他程序并暂停挖矿',

    'Idle:':'空闲：',
    'The Worker did not perform any operation.':'矿机没有执行任何操作',

    'MNF(Mining is forbidden):':'禁止挖矿：',
    'The worker is forbidden from running the mining program.':'矿机被禁止运行挖矿程序',

    'UAM(Unable to Mining):':'无法挖矿：',
    'The hardware of the worker does not support the operation of the mining program.':'矿机的硬件不支持挖矿程序运行',

    'Abnormal:':'异常：',
    'The worker reported an error.':'矿机报错',

    'Offline:':'离线：',
    'The worker has been offline.':'矿机不在线',

    'The lower part of the card shows a simple chart of the change trend of hashrate, the name of the graphics card and the maximum working temperature':'卡片下半部分则显示的是算力变化趋势简易图表，显卡名称和最高工作温度',
    'Click the card to view the pop-up brief situation chart and basic operation control buttons of the current miner.':'点击卡片，可以查看弹出当前矿机的简要情况图表和基本操作控制按钮。',
    'In this interface, you can quickly view the log data and real-time screenshot of the worker,At the same time, you can view the details / pause / start mining / restart and other operations for the worker.':'在这个界面，您可以快速查看该台矿机的日志数据以及实时屏幕截图，同时您可以针对矿机进行查看详情/暂停/开始挖矿/重启等操作。',
    'Click the small box on the card to pop up the status window of the current corresponding mine card (the small box represents a video card)':'点击卡片上的小方块，会弹出当前对应矿卡的状态窗口（一个小方块代表一张矿卡）',
    'Workers':'设备管理',
    'All worker’s information will be tiled out in the equipment management list. You can view details / restart and other operations for a single worker.':'所有的矿机信息都会在设备管理列表中平铺出来，您可以针对单个矿机执行查看详情/重启等操作。',
    'After clicking the worker’s number name, the system will display the real-time calculation force / status of the current worker in the form of chart:':'点击矿机机号名称后，系统会将当前矿机的实时算力/矿机状态通过图表的方式显示出来：',
    'At the top of the page, you can see a row of shortcut buttons':'在页面的顶部，您可以看到一排快捷操作按钮',
    'They are:':'分别是：',
    'Logs:':'日志：',
    'Display errors elerts in the system logs':'即时显示系统日志中所遇到的错误',
    'Edit config:':'修改配置：',
    'Change the templates of the current worker':'变更当前矿机的配置模板',
    'Worker statistics:':'矿工统计：',
    'Statistics for current mining machines':'针对当前矿机的统计',
    'Frobidden:':'禁用：',
    'Disable the current worker from mining':'禁止当前矿机挖矿',
    'Snapshoot:':'快照：',
    'View the screenshot from currenti worker':'查看当前矿机电脑截屏',
    'Core:':'查看内核：',
    'View relevant data of current worker':'查看当前矿机相关数据',
    'Overclock profile:':'超频模板：',
    'Config the overclocking of current worker':'配置当前矿机的超频数据',
    'Restartminner/Restart sofeware/ Reboot machine/ Stop mining / Shutdown the machine':'重启内核/重启软件/重启电脑/关机 操作',
    '24H Logs':'日志管理',
    'The error logs of all sites under the current account will be displayed here':'当前账户下所有场所的错误日志，都会在此处显示',
}