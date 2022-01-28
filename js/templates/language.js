
var langTypeS=(navigator.language || navigator.browserLanguage).toLowerCase()

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

var langList={
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
    'Can AMining mining on a PC?':'无忧矿可以支持在个人电脑上挖矿吗？',
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