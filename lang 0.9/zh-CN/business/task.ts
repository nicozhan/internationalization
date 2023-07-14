export default {
  taskText: '任务',
  annotate: '标注',
  review: '审核',
  acceptance: '验收',
  addStage: '添加工序',
  selectClassTitle: '选择标签和分类',
  selected: '已选中',
  clearAll: '清空',
  addAll: '添加全部',
  createTask: '创建任务',
  closeTask: '关闭任务',
  saveChange: '保存变更',
  instruction: '说明',
  manageClass: '管理标签',
  searchClassPlaceholder: '搜索标签和分类',
  closed: '已关闭',
  viewPerformance: '查看绩效',
  personalPerformance: '个人绩效',
  myTasksPerformance: '我的任务绩效',
  annotateAll: '标注全部',
  reviewAll: '审核全部',
  previewAnnotationObjects: '预览标注对象',
  Worker: '作业员',
  progressStatus: {
    continue: '继续',
    publish: '发布中',
    configuring: '配置中',
    ongoing: '进行中',
    paused: '已暂停',
    closed: '已关闭',
    completed: '已完成',
    deleted: '已删除',
  },
  detail: {
    viewAllInStudio: '在工具中查看全部',
    viewAllInACC: '验收',
    viewAllInQA: '质检',
    checked: '已检查',
    unChecked: '未检查',
    accept: '验收通过',
    reject: '驳回',
    reassign: '重新分配',
    removeFromTask: '从任务中移除',
    acceptAll: '验收通过全部',
    rejectAll: '驳回全部',
    deleteTitle: '是否确认删除该抽样结果？',
    deleteDesc: '删除抽样结果不会影响原始数据和标注结果。',
    acceptAllModalTips1: '您将要验收通过',
    acceptAllModalTips2: '您将要验收通过已完成工作流的全部数据',
    acceptAllModalTips3: '一旦您确认此操作',
    acceptAllModalTips4: '所有成员将不能在此任务中修改这些数据',
    acceptAllModalTips5: '您可以查看和管理标注结果',
    acceptAllModalTips6: '我理解上述后果，并确认验收通过这些数据。',
    acceptAllModalPlaceHolder: '输入上面的文本以验收通过所选数据',
    rejectAllModalTips1: '您将要驳回',
    rejectAllModalTips2: '已完成工作流的所选数据',
    rejectAllModalTips3: '您将要驳回已完成工作流的全部数据',
    rejectAllModalTips4: '请选择您要将数据重新驳回到哪个工序',
    rejectAllModalTips5: '只有在时间戳前进入验收阶段的数据会被包括.',
    rejectAllModalTips6: '我知道此操作将拒绝任务中的所有数据，并希望拒绝这些数据',
    rejectAllModalTips7: '我知道此操作将拒绝{num}条选中的数据，并希望拒绝这些数据',
    rejectAllModalPlaceHolder: '请输入上面的全部文字去驳回所选的数据',
    targetStage: '目标工序',
    rejectReasons: '驳回理由',
    newWorker: '新作业员',
    originalWorker: '原作业员',
    reassignModalTips1: '请选择要指定的作业员',
    reassignModalTips2: '丢弃原作业的作业结果',
    samplePopover: '只有在验收阶段的数据才能被抽样。',
    sampleModalTips1: '包括其他样本中的数据。',
    sampleModalTips2: '在连续帧中抽样',
    samplingSize: '样本大小',
    and: '和',
    framesPerSegment: '每分段的帧数',
    randomSampling: '随机抽样',
    fieldWarning: '任务一旦发布，标记*的配置将不能再更改',
    preview: '预览',
    ViewInQA: '质检',
    ViewInACC: '验收',
    ViewInStudio: '工具中查看',
    empty: '当前无数据',
  },
  create: {
    name: '任务名',
    createByYourself: '自己创建任务',
    createByTemplate: '基于模板创建任务',
    dataType: '数据类型',
    dataTypeDesc:
      '数据类型定义了该任务的数据类型，您可以在点云基础、点云融合和图像之间选择一种数据类型。',
    scenarioType: '场景类型',
    scenarioTypeDesc:
      '场景类型定义了您如何在此任务中组织数据。单帧仅用于目标检测任务，而连续帧支持跟踪任务。',
    annotationType: '标注类型',
    annotationTypeDesc:
      '标注类型定义了如何标注数据，实例是以实例方式标注数据，如边界框、立方体、多边形等，很快我们将支持分割标注。',
    industry: '行业',
    nameHolder: '请输入名字',
    taskNameLengthError: '任务名称不应超过100字符',
    uploadAttachment: '上传附件',
    onlySupports: '仅支持PDF',
    editInstruction: '编辑说明',
    next: '下一步',
    cancel: '取消',
    prev: '上一步',
    saveAndExit: '保存并退出',
    save: '保存',
    thisIs: '这是一个',
    only: '仅',
    datasetWillBeShown: '数据集将会显示',
    useTemplate: '使用模板',
    pleaseSelectAData: '请选择数据集',
    selectAResult: '选择一份结果',
    cancelOrClearAll: '取消/清空全部',
    regroupSceneForWorkers: '在该任务中重组连续帧',
    every: '每',
    dataAsaScene: '数据作为一个连续帧',
    regroupPopover: '这只会影响到当前任务，你数据集中的所有连续帧不会被修改。',
    addTips: '请从中添加数据到任务',
    addTipsEnd: ' ',
    ontologyOf: '{datasetName}下的本体',
    onlyOntologyIn: '你只能选择或编辑{datasetName}下的本体',
    clickToBack: '点击返回修改数据集',
    preview: '在工具中预览',
    assignMemberTitle: '将任务分配给团队成员',
    assignTaskAdminTitle: '指定管理员',
    assignTaskAdminPopover: '管理员可以管理任务。',
    assignWorkerAdminTitle: '指派检察员',
    assignWorkerAdminPopover: '检察员可以接受任务。',
    batchSize: '样本数量',
    batchSizePopover: '每个作业员在单个工序可以领取的数据量。',
    batchSizeRequiredError: '请输入样本数量',
    maxDataDuration: '最大执行时长',
    maxDataDurationPopover: '完成一批次数据的最大分钟数。',
    maxDataDurationRequiredError: '请输入最大执行时长',
    minutes: '分钟',
    dataAccuracy: '计算作业准确率',
    dataAccuracyPopover: '确定一个数据是否准确的框准率阈值。',
    dataAccuracyRequiredError: '请输入准确率阈值',
    allowWorkerView: '允许作业员查看已提交的数据',
    allowSame: '允许同一作业员在不同工序处理相同的数据',
    searchAndFilter: '搜索 & 过滤',
    searchUserPlaceholder: '搜索用户',
    allMembers: '全部成员',
    leaveWarning: '现在离开将放弃所有未保存的更改，是否确定离开？',
    removeUploadDataWarning: '是否确认移除已选中的数据？',

    selectAllError: '请先取消勾选选择全部数据（应用筛选）',
    nextConfirm: '您当前任务的基本设置将删除后续步骤中的所有设置，是否继续？',
    selectTemplate: '请选择一个模板',

    publishSuccess: '任务已发布',

    allowExceedArea: '是否允许结果标注在图片外',
    allowExceedClassLimit: '结果不符合标签限制时，是否允许提交',
    annotationTypeHolder: '请选择标注类型',

    addDataProgress: '正在添加数据...',
    addDataSuccess: '数据添加成功，我们将稍后为您删除重复项',
    addStep: {
      selectAllDataApplyFilter: '选择所有数据并应用筛选器',
      uploadDataInDataset: '上传数据到数据集',
      singleInfo: '这是一个单帧任务，只显示单帧数据',
      trackingInfo: '这是一个跟踪任务，只显示场景数据',
    },
  },
  createTips: {
    taskAdminAssignTip: '管理员需要至少分配1人！',
    workerAdminAssignTip: '验收员需要至少分配1人！',
    memberSelectedTip: '至少应选择1个成员',
    panelMaxLengthTip: '面板名称最大长度为 100',
    batchSizeRequired: '批量大小为必填项',
    batchSizeMax: '批量大小最大值为 1000',
    maxDurationRequired: '最长数据持续时间为必填项',
    instanceAccuracyRequired: '实例数据准确度为必填项',
    segmentationAccuracyRequired: '分割数据准确度为必填项',
    instanceMax: '实例数据准确度最大值为 100',
    segmentationMax: '分割数据准确度最大值为 100',
    publishFailed: '任务发布失败',
    reviewStageMax: '审核阶段最多为 5',
    uncheckFilter: '请先取消选择所有数据并应用筛选器',
    selectItem: '请选择一个项目',
    noDataCanSelected: '无法选择数据',
    upload10Files: '最多只能上传10个文件!',
    uploadPdf: '只能上传 PDF 文件',
    changeDatasetTip:
      '您当前正在更改数据集，这将在以下步骤中删除所有先前的数据选择和设置，是否继续？',
    selectDataset: '请选择一个数据集',
    addData: '请添加一个数据',
    // TODO 中文
    createDataset: '请创建一些数据集',
    addDataToTemplate: '请从此 {dataset} 中添加一些数据到任务中',
  },
  error: {
    classRequired: '请选择一个标签或分类',
    previewError: '找不到您任务中的任何数据，请检查您的任务和数据集。',
  },
  step: {
    taskBasics: '基础信息',
    uploadData: '上传数据',
    ontology: '本体',
    instruction: '说明',
    workflow: '工作流',
    QaOptional: '质检(可选)',
  },
  setting: {
    classTips: '本体上的更改不会自动应用于已标注的数据。已标注的数据需要手工修复。',
    restartModalTips1: '您将关闭',
    restartModalTips2: '一旦确认此操作',
    restartModalTips3: '这个任务将不能被重启。',
    restartModalTips4: '全部未验收的标注结果都会被丢弃。',
  },
  list: {
    // tab
    myTask: '我的任务',
    taskManagement: '团队任务管理',
    // table
    id: '任务ID',
    name: '任务名',
    type: '类型',
    taskType: '任务类型',
    stage: '工序',
    stageType: '工序类型',
    admins: '管理员',
    progress: '进度',
    ongoingData: '进行中的数据',
    // btn
    viewHistory: '查看历史',
    annotate: '标注',
    review: '审核',
    config: '配置',
    pause: '暂停',
    continue: '继续',
    close: '关闭',
    delete: '删除',
    restart: '重新启动',
    // tips
    inReview: '审核中',
    claimed: '已领取',
    toBeModified: '待修改',
    needAcceptance: '需要验收',
    completed: '已完成',
    taskPool: '任务池',
    // empty
    emptyText: '暂无被分配的任务。',
    // search
    searchText: '搜索任务ID或任务名',
  },
  listModal: {
    copySuccessfully: '任务 {name} 已成功复制',
    warning: '警告',
    goingTo: '您将要',
    confirmOption: '确认此操作后:',
    pauseTip: '所有作业员将无法访问此任务，直到你重启它。',
    closeTip1: '此任务将无法重启。',
    closeTip2: '所有未被验收的标注结果将被丢弃。',
    closeBtn2: '仍然关闭',
    closeBtn3: '去验收',
    deleteToast: '你需要先关闭此任务',
    deleteTip1: '所有与此任务相关的数据（如评论，驳回，统计数据等）将被删除。',
    deleteTip2: '原始数据不会被删除。',
    deleteTip3: '所有已验收的标注结果不会被删除。所有绩效不会被删除。',
  },
  detailTab: {
    overview: '概览',
    data: '数据',
    performance: '绩效',
    setting: '设置',
  },
  welcome: {
    hello: '您好',
    toDoInfo: '在“待办事项”部分，您的已分配任务所在的位置，只需单击“注释”或“审核”即可开始。',
    myTaskInfo: '任务管理员可以在“我的任务管理”中跟踪和管理分配的任务',
    desc1: '您可以在“待办”中找到分配给您的任务。 开始工作，请点击“标注/审查”。',
    desc2: '管理员可以在“我的任务管理”中找到任务。',
    desc3: '感谢您与我们合作并助推人工智能发展。',
  },
  overview: {
    statistic: {
      completed: '已完成',
      needAcc: '验收',
      inLastDay: '最近一天',
      rejects: '驳回',
      comments: '评论',
    },
    changeTip:
      '您正在以标注员或审核员的身份查看此任务。 在此视图中，仪表板仅显示与您相关的数据。 点击此处以管理员身份查看任务。',
    changeBtnText: '以管理员查看',
    changeTipForInspector:
      '您正在以标注员或审核员的身份查看此任务。 在此视图中，仪表板仅显示与您相关的数据。 点击此处以验收员身份查看任务',
    changeBtnTextForInspector: '以验收员查看',
    progress: '进度',
    progressCompleted: '已完成',
    accuracy: '准确率',
    accuracyTip: '准确率监控此任务中的标注准确率，支持图准率和框准率。',
    byData: '图准率',
    byObjects: '框准率',
    segmentAccuracyTip: '准确率监控此任务中的标注准确率，支持图准率和点准率。',
    byPoint: '点准率',
    stage: '工序细分',
    stageTip: '工序细分展示数据在每个工序的分布情况。',
    empty: '无说明',
    progressEmpty: '暂无被分配的任务。',
    notStarted: '未开始',
    object: '结果',
    notClaimed: '待领取',
    working: '作业中',
    submitted: '已提交',
    rejected: 'Rejected',
    segmentationPoint: '分割点',
    segmentationData: '分割数据',
    segmentationObject: 'Segmentation Object',
    // TODO 中文
    imgCardAccuracy: {
      IObject: 'I-Object',
      SPoint: 'S-Point',
      SObject: 'S-Object',
    },
  },
  countdown: {
    claim: '领取',
    emptyClaim: '当前暂无可领取的数据',
    emptyTip:
      '您可以一次性认领多达 {dataNum} 个数据，批处理持续时间为 {minute} 分钟。 因此，您每个数据的最大时间为 {perMinute} 分钟。',
    emptyNoData: '没有数据了，祝贺！',
    openWarning: '领取的数据已过期。请重新领取。',
    pausedFor: '已暂停',
    dueIn: '过期时间',
    activeSelect: {
      withComments: '有评论',
      withMyComments: '有我创建的评论',
      withWorkflowRejects: '有工作流中驳回',
    },
    actionList: {
      submit: '提交',
      pass: '通过',
      reject: '驳回',
      annotate: '标注',
      review: '审核',
      markValid: '标记为无效数据',
    },
    expiringModal: {
      claimedData: '你领取的数据（',
      isExpiring: ' 个剩余) 即将过期',
      release: '之后，它们将全部被释放到任务池中。',
    },
    expiredModal: {
      refresh: '请重新领取。',
      claim: '领取的数据已过期。点击重新领取。',
    },
    pauseModal: {
      claim: '领取的数据已暂停。点击继续恢复工作。',
    },
    submitModal: {
      submit: '提交',
      goingTo: '您将要提交所选的',
      data: '个数据',
      confirmOption: '一旦确认这个操作：',
      tip1: '这些数据将被提交到队列的下一工序',
      tip2: '在任务管理员或后续工序的工作人员将数据返回给你之前，你将无法修改这些数据。',
      endText: '我理解上述后果，并确认提交这些数据。',
    },
    rejectModal: {
      reject: '驳回',
      goingTo: '您将要驳回所选的',
      data: '个数据',
      targetStage: '目标工序',
      worker: '作业员',
      original: '原作业员',
      originalTip: '提交该作业的人',
      new: '新作业员',
      newTip: '该工序的其他任何人',
      result: '结果',
      keepResults: '保留结果',
      keepResultsTip1: '保留全部结果及绩效',
      clearResults: '清空结果',
      clearResultsTip2: '清空全部人工标注结果和绩效',
      rejectReasons: '驳回原因',
    },
  },

  taskList: {
    TodoTab: '待完成',
    myTaskManagementTab: '我的任务管理',
  },

  taskDetail: {
    previewTips: '预览标注结果',
    settingAlert: '要在此任务中进行更改，您必须先将自己设为任务管理员。',
    dataAlertBefore: '要在此任务中执行操作，您必须首先在',
    dataAlertAfter: '选项卡中将自己分配为任务管理员',
    dataAdded: '已添加数据',
    dataStatus: '数据状态',
    workflowStatus: '工作流状态',
    AssigneeAnnotator: '标注员',
    Activities: '活动',
    sampling: '抽样',
    acceptTask: '验收任务',
    rejectTask: '驳回任务',
    byObject: '框准率',
    byData: '图准率',
    byPoint: '点准率',
    withComments: '有评论',
    withMyComments: '有自己的评论',
    markedAsInvalid: '标记无效',
    withWorkflowRejects: '曾被审核驳回',
    withACCRejects: '曾被验收驳回',
    pausedForAnHour: '暂停超过1小时',
    sample: {
      accuracyIn: '准确度在',
      sample: '样本',
      all: '全部',
      details: '详情',
      samplingMethod: '抽样方法',
      samplingTotalSize: '抽样/总大小',
      samplingBy: '抽样者',
      samplingDate: '抽样日期',
      samplingTip: '您可以在工具的审核模式下对场景进行抽样',
      samplingData: '抽样数据',
      totalSize: '总大小（应用当前筛选器）',
      fileSize: '文件（占总量的 { totalPercent }%）',
    },
    ifChecked: '如果选中',
    stageStatus: '阶段状态',
    workingByOthers: '其他人正在操作',
    lock: {
      occupiedBy: '被占用者',
      occupiedDataCount: '占用数据数量',
      selectRecord: '请选择一条记录',
    },
    addDataSuccessfully: '成功添加数据',
    remove: {
      removeData: "您将要从任务中移除 {num} 条数据。一旦移除，它们将不再在任务中工作。",
      removeSuccess: '已从任务中移除 {num} 条数据。',
      removeFailure: '已失败 {num} 条数据，因为它们已被认领。',
    },
  },
  taskSetting: {
    linkedDataset: '关联的数据集',
    annotationType: '标注类型',
    taskStarted: '任务开始时间',
    taskCompleted: '任务完成时间',
    viewInNewTab: '在新页面中查看',
  },
};
