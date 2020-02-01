class AddressCreate {
  /** addressCreate */
  addressCreate = [];

  /** consigneId */
  consigneId = undefined;

  /** consigneName */
  consigneName = '';
}

class AddressDO {
  /** address */
  address = '';

  /** addressNo */
  addressNo = '';

  /** areaCode */
  areaCode = '';

  /** city */
  city = '';

  /** cityNo */
  cityNo = '';

  /** consigneId */
  consigneId = undefined;

  /** consigneName */
  consigneName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDefault */
  isDefault = '';

  /** isDeleted */
  isDeleted = '';

  /** lat */
  lat = '';

  /** linkMan */
  linkMan = '';

  /** lon */
  lon = '';

  /** omsAddressId */
  omsAddressId = undefined;

  /** partyId */
  partyId = undefined;

  /** province */
  province = '';

  /** provinceNo */
  provinceNo = '';

  /** region */
  region = '';

  /** regionNo */
  regionNo = '';

  /** remark */
  remark = '';

  /** tel */
  tel = '';
}

class AddressQueryParam {
  /** address */
  address = '';

  /** addressNo */
  addressNo = '';

  /** city */
  city = '';

  /** cityNo */
  cityNo = '';

  /** consigneId */
  consigneId = undefined;

  /** consigneName */
  consigneName = '';

  /** id */
  id = undefined;

  /** isDefault */
  isDefault = '';

  /** isDeleted */
  isDeleted = '';

  /** keyWord */
  keyWord = '';

  /** linkMan */
  linkMan = '';

  /** omsAddressId */
  omsAddressId = undefined;

  /** ordinarySearch */
  ordinarySearch = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = undefined;

  /** province */
  province = '';

  /** provinceNo */
  provinceNo = '';

  /** realName */
  realName = '';

  /** region */
  region = '';

  /** regionNo */
  regionNo = '';

  /** remark */
  remark = '';

  /** start */
  start = undefined;

  /** tel */
  tel = '';
}

class AddressVO {
  /** address */
  address = '';

  /** addressNo */
  addressNo = '';

  /** areaCode */
  areaCode = '';

  /** city */
  city = '';

  /** cityNo */
  cityNo = '';

  /** consigneId */
  consigneId = undefined;

  /** consigneName */
  consigneName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDefault */
  isDefault = '';

  /** isDeleted */
  isDeleted = '';

  /** lat */
  lat = '';

  /** linkMan */
  linkMan = '';

  /** lon */
  lon = '';

  /** omsAddressId */
  omsAddressId = undefined;

  /** partyId */
  partyId = undefined;

  /** province */
  province = '';

  /** provinceNo */
  provinceNo = '';

  /** region */
  region = '';

  /** regionNo */
  regionNo = '';

  /** remark */
  remark = '';

  /** statementUnit */
  statementUnit = '';

  /** tel */
  tel = '';
}

class BaseRes {
  /** code */
  code = undefined;

  /** data */
  data = new CarDTO();

  /** message */
  message = '';
}

class BatchOperationParam {
  /** 地址 */
  address = '';

  /** 车辆id */
  carId = undefined;

  /** 承运商id */
  carrierInfoId = undefined;

  /** 承运商名称 */
  carrierName = '';

  /** 市 */
  city = '';

  /** 司机名称 */
  driverName = '';

  /** 司机联系方式 */
  driverPhone = '';

  /** 订单id集合 */
  ids = [];

  /** 纬 */
  loclat = '';

  /** 经 */
  loclng = '';

  /** 操作：派单，提货，送达，发运 */
  operationType = '';

  /** 车辆号 */
  plateNumber = '';

  /** 省 */
  province = '';

  /** 区 */
  region = '';

  /** 时间 */
  time = '';
}

class Car {
  /**  额定载重 */
  capacity = undefined;

  /**  主键ID */
  carId = undefined;

  /**  车长 */
  carLength = undefined;

  /**  车辆编号 */
  carNo = '';

  /**  车辆类型 */
  carType = '';

  /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
  carrierInfoId = undefined;

  /**  公司id */
  companyInfoId = undefined;

  /**  企业名称 */
  companyName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  绑定设备号 */
  deviceNo = '';

  /**  司机姓名 */
  driverName = '';

  /**  司机手机号 */
  driverPhone = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /**  机动车辆类型 */
  motorVehicleType = '';

  /**  组织名称 */
  organizationName = '';

  /**  会员ID */
  partyId = undefined;

  /**  车牌号 */
  plateNumber = '';

  /**  备注 */
  remark = '';

  /**  记录更新时间 */
  stampDate = '';

  /**  额定体积 */
  volume = undefined;
}

class CarBindDeviceParam {
  /**  车辆id */
  carId = undefined;

  /**  绑定设备号 */
  deviceNo = '';

  /** 设备类型 小黑卡，中交兴路 */
  deviceType = '';

  /**  车牌号 */
  plateNumber = '';
}

class CarDTO {
  /**  额定载重 */
  capacity = undefined;

  /**  主键ID */
  carId = undefined;

  /**  车长 */
  carLength = undefined;

  /**  车辆编号 */
  carNo = '';

  /**  车辆类型 */
  carType = '';

  /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
  carrierInfoId = undefined;

  /**  承运商名称 */
  carrierName = '';

  /**  公司id */
  companyInfoId = undefined;

  /**  企业名称 */
  companyName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  绑定设备号 */
  deviceNo = '';

  /**  司机姓名 */
  driverName = '';

  /**  司机手机号 */
  driverPhone = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** 地址信息 */
  iotGpsVO = new IotGpsVO();

  /** isDeleted */
  isDeleted = '';

  /**  机动车辆类型 */
  motorVehicleType = '';

  /**  组织名称 */
  organizationName = '';

  /**  会员ID */
  partyId = undefined;

  /**  车牌号 */
  plateNumber = '';

  /**  备注 */
  remark = '';

  /**  记录更新时间 */
  stampDate = '';

  /**  额定体积 */
  volume = undefined;
}

class CarQueryParam {
  /**  车辆类型 */
  carType = '';

  /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
  carrierInfoId = undefined;

  /** companyInfoId */
  companyInfoId = undefined;

  /** driverPhone */
  driverPhone = '';

  /** enableStatus */
  enableStatus = '';

  /** isDeleted */
  isDeleted = '';

  /** 关键字：车牌，司机姓名，手机号的模糊查询 */
  keyWord = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = undefined;

  /** plateNumber */
  plateNumber = '';

  /** realName */
  realName = '';

  /** start */
  start = undefined;
}

class CarUpdateParam {
  /**  额定载重 */
  capacity = undefined;

  /**  车辆Id */
  carId = undefined;

  /**  车长 */
  carLength = undefined;

  /**  车辆类型 */
  carType = '';

  /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
  carrierInfoId = undefined;

  /**  承运商名称 */
  carrierName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  绑定设备号 */
  deviceNo = '';

  /**  司机姓名 */
  driverName = '';

  /**  司机手机号 */
  driverPhone = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /**  机动车辆类型 */
  motorVehicleType = '';

  /**  会员ID */
  partyId = undefined;

  /**  车牌号 */
  plateNumber = '';

  /**  备注 */
  remark = '';

  /**  额定体积 */
  volume = undefined;
}

class CarrierCreateParam {
  /**  详细地址 */
  address = '';

  /**  承运商名称 */
  carrierName = '';

  /**  市 */
  city = '';

  /**  市编号 */
  cityNo = '';

  /**  公司id */
  companyInfoId = undefined;

  /**  企业名称 */
  companyName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  邮箱 */
  email = '';

  /**  启用状态 */
  enableStatus = '';

  /** id */
  id = undefined;

  /**  身份证号码 */
  identityNumber = '';

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /**  发票抬头 */
  invoiceTitle = '';

  /** isDeleted */
  isDeleted = '';

  /**  联系人 */
  linkMan = '';

  /**  组织名称 */
  organizationName = '';

  /**  会员ID */
  partyId = undefined;

  /**  承运商电话 */
  phone = '';

  /**  省 */
  province = '';

  /**  省编号 */
  provinceNo = '';

  /**  区 */
  region = '';

  /**  区编号 */
  regionNo = '';

  /**  备注信息 */
  remark = '';

  /**  税号 */
  taxNo = '';

  /**  税率 */
  taxRate = undefined;

  /**  联系人电话 */
  tel = '';
}

class CarrierInfo {
  /**  详细地址 */
  address = '';

  /**  ID */
  carrierInfoId = undefined;

  /**  承运商名称 */
  carrierName = '';

  /**  承运商编码 */
  carrierNo = '';

  /**  市 */
  city = '';

  /**  市编号 */
  cityNo = '';

  /**  公司id */
  companyInfoId = undefined;

  /**  企业名称 */
  companyName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  邮箱 */
  email = '';

  /**  启用状态 */
  enableStatus = '';

  /** id */
  id = undefined;

  /**  身份证号码 */
  identityNumber = '';

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /**  发票抬头 */
  invoiceTitle = '';

  /** isDeleted */
  isDeleted = '';

  /**  联系人 */
  linkMan = '';

  /**  组织名称 */
  organizationName = '';

  /**  会员ID */
  partyId = undefined;

  /**  承运商电话 */
  phone = '';

  /**  省 */
  province = '';

  /**  省编号 */
  provinceNo = '';

  /**  区 */
  region = '';

  /**  区编号 */
  regionNo = '';

  /**  备注信息 */
  remark = '';

  /** stampDate */
  stampDate = '';

  /**  税号 */
  taxNo = '';

  /**  税率 */
  taxRate = undefined;

  /**  联系人电话 */
  tel = '';
}

class CarrierQueryParam {
  /** 详细地址 */
  address = '';

  /** 承运商名称 */
  carrierName = '';

  /** carrierNo */
  carrierNo = '';

  /** 市 */
  city = '';

  /** 市编号 */
  cityNo = '';

  /** companyInfoId */
  companyInfoId = undefined;

  /** enableStatus */
  enableStatus = '';

  /** 身份证号码 */
  identityNumber = '';

  /** isDeleted */
  isDeleted = '';

  /** 关键字 */
  keyWord = '';

  /** 联系人 */
  linkMan = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = undefined;

  /** 承运商电话 */
  phone = '';

  /** 省 */
  province = '';

  /** 省编号 */
  provinceNo = '';

  /** realName */
  realName = '';

  /** 区 */
  region = '';

  /** 区编号 */
  regionNo = '';

  /** start */
  start = undefined;

  /** 联系人电话 */
  tel = '';
}

class CarrierUpdateParam {
  /**  详细地址 */
  address = '';

  /**  承运商名称 */
  carrierName = '';

  /**  市 */
  city = '';

  /**  市编号 */
  cityNo = '';

  /**  公司id */
  companyInfoId = undefined;

  /**  企业名称 */
  companyName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  邮箱 */
  email = '';

  /**  启用状态 */
  enableStatus = '';

  /**  承运商名称 */
  id = undefined;

  /**  身份证号码 */
  identityNumber = '';

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /**  发票抬头 */
  invoiceTitle = '';

  /** isDeleted */
  isDeleted = '';

  /**  联系人 */
  linkMan = '';

  /**  组织名称 */
  organizationName = '';

  /**  会员ID */
  partyId = undefined;

  /**  承运商电话 */
  phone = '';

  /**  省 */
  province = '';

  /**  省编号 */
  provinceNo = '';

  /**  区 */
  region = '';

  /**  区编号 */
  regionNo = '';

  /**  备注信息 */
  remark = '';

  /**  税号 */
  taxNo = '';

  /**  税率 */
  taxRate = undefined;

  /**  联系人电话 */
  tel = '';
}

class ConsigneInfoDO {
  /** address */
  address = '';

  /** city */
  city = '';

  /** cityNo */
  cityNo = '';

  /** consigneNo */
  consigneNo = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** invoiceTitle */
  invoiceTitle = '';

  /** isDeleted */
  isDeleted = '';

  /** linkMan */
  linkMan = '';

  /** name */
  name = '';

  /** omsConsigneInfoId */
  omsConsigneInfoId = undefined;

  /** partyId */
  partyId = undefined;

  /** province */
  province = '';

  /** provinceNo */
  provinceNo = '';

  /** region */
  region = '';

  /** regionNo */
  regionNo = '';

  /** remark */
  remark = '';

  /** statementUnit */
  statementUnit = '';

  /** taxNo */
  taxNo = '';

  /** tel */
  tel = '';

  /** type */
  type = '';
}

class ConsigneInfoVO {
  /** address */
  address = '';

  /** city */
  city = '';

  /** cityNo */
  cityNo = '';

  /** consigneInfoIds */
  consigneInfoIds = [];

  /** consigneNo */
  consigneNo = '';

  /** inRegion */
  inRegion = '';

  /** invoiceTitle */
  invoiceTitle = '';

  /** isDeleted */
  isDeleted = '';

  /** keyWord */
  keyWord = '';

  /** linkMan */
  linkMan = '';

  /** name */
  name = '';

  /** omsConsigneInfoId */
  omsConsigneInfoId = undefined;

  /** ordinarySearch */
  ordinarySearch = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = undefined;

  /** province */
  province = '';

  /** provinceNo */
  provinceNo = '';

  /** realName */
  realName = '';

  /** region */
  region = '';

  /** regionNo */
  regionNo = '';

  /** remark */
  remark = '';

  /** serialNum */
  serialNum = undefined;

  /** start */
  start = undefined;

  /** statementUnit */
  statementUnit = '';

  /** taxNo */
  taxNo = '';

  /** tel */
  tel = '';

  /** type */
  type = '';

  /** typeList */
  typeList = [];
}

class CostItem {
  /**  签约企业IloopContractedCompany表的ID */
  companyId = undefined;

  /**  主键ID */
  costItemId = undefined;

  /**  费用项的顺序索引 */
  costItemIndex = undefined;

  /**  费用项说明 */
  costItemInfo = '';

  /**  费用项名称 */
  costItemName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /**  启用状态: 0 启用；1 停用 */
  enableStatus = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /**  费用项名称 + 增加；- 扣减 */
  operationType = '';

  /**  记录更新时间 */
  stampDate = '';
}

class DeleteByIdsParam {
  /** id列表 */
  id = [];
}

class DeviceDo {
  /** 所属企业 */
  affiliatedCompany = '';

  /** 所属企业id */
  affiliatedCompanyId = undefined;

  /** 所属运营商 */
  affiliatedOperator = '';

  /** 所属运营商id */
  affiliatedOperatorId = undefined;

  /** 绑定状态 (0绑定 1未绑定) */
  bindingStatus = '';

  /** 业务单号 */
  clientOrderNo = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** 设备编码(预留字段) */
  deviceCode = '';

  /** 设备名称 */
  deviceName = '';

  /** 设备状态(0启用 1未启用 2停用) */
  deviceStatus = '';

  /** 设备类型 */
  deviceType = '';

  /** iccid(卡号) */
  iccid = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** 在线状态 (0在线 1离线) */
  onlineStatus = '';

  /** 会员ID */
  partyId = undefined;

  /** 最近绑定时间 */
  recentlyBoundTime = '';

  /** 最近上报时间 */
  recentlyReportedTime = '';

  /** 发展人 */
  referencePerson = '';

  /** 设备序列号 */
  serialNo = '';

  /** 软件版本号 */
  softwareVersionNum = '';

  /** 跟踪对象名称 */
  trackName = '';
}

class DeviceParam {
  /** 签约企业(新增或修改设备时,该参数必传) */
  affiliatedCompany = '';

  /** 所属企业ID */
  affiliatedCompanyId = undefined;

  /** affiliatedCompanyIds */
  affiliatedCompanyIds = [];

  /** 运营组织(新增或修改设备时,该参数必传) */
  affiliatedOperator = '';

  /** 所属运营商ID */
  affiliatedOperatorId = undefined;

  /** 截止创建日期 */
  createDateEnd = '';

  /** 起始创建日期 */
  createDateStart = '';

  /** 设备编码(预留字段) */
  deviceCode = '';

  /** 设备名称 */
  deviceName = '';

  /** 设备状态(0启用 1未启用 2停用) */
  deviceStatus = '';

  /** 设备类型 */
  deviceType = '';

  /** 卡号 */
  iccid = '';

  /** 设备id(修改或删除时该参数必传) */
  id = undefined;

  /** isDeleted */
  isDeleted = '';

  /** 在线状态 (0在线 1离线) */
  onlineStatus = '';

  /** pageSize */
  pageSize = undefined;

  /** 发展人 */
  referencePerson = '';

  /** 设备序列号(新增或修改设备时,该参数必传) */
  serialNo = '';

  /** 来源    0 运营pc端调用  1货主pc端调用 */
  source = '';

  /** start */
  start = undefined;

  /** 跟踪对象名称 */
  trackName = '';
}

class DevicesInfoVO {
  /** 绑定设备总数 */
  bindingTotal = undefined;

  /** 离线设备总数 */
  lineTotal = undefined;

  /** 设备列表 */
  page = new Page();

  /** 待回收设备总数 */
  recycleTotal = undefined;

  /** 全部设备总数 */
  total = undefined;

  /** 未绑定设备总数 */
  unBindingTotal = undefined;
}

class DevicesTrackRequest {
  /** devicesNo */
  devicesNo = '';

  /** endCreateDate */
  endCreateDate = '';

  /** startCreateDate */
  startCreateDate = '';
}

class DictionaryListParam {
  /** clientOrderNo */
  clientOrderNo = '';

  /** description */
  description = '';

  /** isDeleted */
  isDeleted = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = undefined;

  /** realName */
  realName = '';

  /** start */
  start = undefined;

  /** type */
  type = '';

  /** typeName */
  typeName = '';
}

class EyeTrackVO {
  /** 天眼跟单列表 */
  page = new Page();

  /** 历史签收总数 */
  pastCount = undefined;

  /** 近期签收总数 */
  recentCount = undefined;

  /** 执行中总数 */
  runningCount = undefined;
}

class GoodsInfoDO {
  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** goodsModelNo */
  goodsModelNo = '';

  /** goodsName */
  goodsName = '';

  /** goodsNo */
  goodsNo = '';

  /** goodsPackage */
  goodsPackage = '';

  /** goodsType */
  goodsType = '';

  /** goodsUnit */
  goodsUnit = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** packingType */
  packingType = '';

  /** partyId */
  partyId = undefined;

  /** remark */
  remark = '';
}

class GoodsInfoQueryParam {
  /** goodsModelNo */
  goodsModelNo = '';

  /** goodsName */
  goodsName = '';

  /** goodsNo */
  goodsNo = '';

  /** goodsPackage */
  goodsPackage = '';

  /** goodsType */
  goodsType = '';

  /** goodsUnit */
  goodsUnit = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = '';

  /** keyWord */
  keyWord = '';

  /** packingType */
  packingType = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = undefined;

  /** realName */
  realName = '';

  /** remark */
  remark = '';

  /** start */
  start = undefined;
}

class IotGpsVO {
  /** 详细地址 */
  address = '';

  /** 中交兴路id */
  carLocationId = undefined;

  /** 承运商名称 */
  carrierName = '';

  /** city */
  city = '';

  /** 上报人 */
  createMan = '';

  /** 数据来源 */
  dataSource = '';

  /** deviceid */
  deviceid = '';

  /** 司机手机 */
  driverPhone = '';

  /** isout */
  isout = '';

  /** loclat */
  loclat = '';

  /** loclng */
  loclng = '';

  /** 物流状态日志 */
  logisticsStatus = '';

  /** omsOrderOperateRecordId */
  omsOrderOperateRecordId = undefined;

  /** 订单状态 */
  orderStatus = '';

  /** 车辆号 */
  plateNumber = '';

  /** province */
  province = '';

  /** region */
  region = '';

  /** 设备号 */
  serialNo = '';

  /** 显示时间 */
  showTime = '';

  /** time */
  time = '';
}

class JSONObject {}

class Map {}

class OmsDictionaryDO {
  /** code */
  code = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** partyId */
  partyId = undefined;

  /** type */
  type = '';

  /** typeName */
  typeName = '';
}

class OrderBindParam {
  /** 业务单号 */
  clientOrderNo = '';

  /** 设备序列号 */
  serialNo = '';

  /** 绑定对象 */
  trackName = '';

  /** 解绑原因 */
  untieReason = '';
}

class OrderCostDTO {
  /** clientOrderNo */
  clientOrderNo = '';

  /** 费用 */
  cost = undefined;

  /** 费用项id */
  costItemId = undefined;

  /** 费用项名称 */
  costItemName = '';

  /** operationType */
  operationType = '';
}

class OrderCostInfo {
  /** 订单号 */
  clientOrderNo = '';

  /** 费用列表 */
  orderCosts = [];

  /** 费用总计 */
  totalCost = undefined;
}

class OrderDevicesDO {
  /** 绑定时间 */
  bindingTime = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** 设备id */
  omsDeviceId = undefined;

  /** 订单id */
  omsRequestOrderId = undefined;

  /** 备注 */
  remark = '';

  /** 跟踪对象名称 */
  trackName = '';

  /** 类型 0=其他，1=车辆，2=订单 */
  type = '';

  /** 解绑时间 */
  unBindingTime = '';

  /** 解绑原因 */
  untieReason = '';
}

class OrderDevicesInfoVO {
  /** 当前与订单绑定的设备绑定状态:BindingStatus：[绑定，未绑定，待回收，绑定离线，未绑定离线 ] */
  bindingStatus = '';

  /** bindingTime */
  bindingTime = '';

  /** 业务单号 */
  clientOrderNo = '';

  /** 订单结束时间 */
  endCreateDate = '';

  /** 当前设备所有的位置信息 */
  gpsData = [];

  /** 当前设备最后位置信息，纬度 */
  loclat = '';

  /** 当前设备最后位置信息，经度 */
  loclng = '';

  /** 订单id */
  omsRequestOrderId = undefined;

  /** 当前订单节点信息 */
  orderOperateRecord = [];

  /** 跟踪对象备注 */
  remark = '';

  /** 当前与订单绑定的设备序列号 */
  serialNo = '';

  /** 发货人详细地址 */
  shipmentAddress = '';

  /** 发货市 */
  shipmentCity = '';

  /** 发货省 */
  shipmentProvince = '';

  /** 发货区 */
  shipmentRegion = '';

  /** 当前设备最后位置信息:显示时间 */
  showTime = '';

  /** 订单开始时间 */
  startCreateDate = '';

  /** 订单状态 */
  status = '';

  /** 上报时间 */
  time = '';

  /** 跟踪对象名称 */
  trackName = '';

  /** 上报节点信息 */
  transportList = [];

  /** unBindingTime */
  unBindingTime = '';

  /** 收货人详细地址 */
  unloadingAddress = '';

  /** 收货市 */
  unloadingCity = '';

  /** 收货省 */
  unloadingProvince = '';

  /** 收货区 */
  unloadingRegion = '';
}

class OrderDevicesVO {
  /** 所属企业 */
  affiliatedCompany = '';

  /** 所属运营商 */
  affiliatedOperator = '';

  /** 绑定人 */
  bindingMan = '';

  /** 绑定状态 (0绑定 1未绑定) */
  bindingStatus = '';

  /** 绑定时间 */
  bindingTime = '';

  /** 业务单号 */
  clientOrderNo = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** 设备编码(预留字段) */
  deviceCode = '';

  /** 设备状态(0启用 1未启用 2停用) */
  deviceStatus = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** 设备id */
  omsDeviceId = undefined;

  /** 订单id */
  omsRequestOrderId = undefined;

  /** 在线状态 (0在线 1离线) */
  onlineStatus = '';

  /** 最近绑定时间 */
  recentlyBoundTime = '';

  /** 最近上报时间 */
  recentlyReportedTime = '';

  /** 发展人 */
  referencePerson = '';

  /** 备注 */
  remark = '';

  /** 物流订单号 */
  requestOrderNo = '';

  /** 设备序列号 */
  serialNo = '';

  /** 跟踪对象名称 */
  trackName = '';

  /** 类型 0=其他，1=车辆，2=订单 */
  type = '';

  /** 解绑人 */
  unBindingMan = '';

  /** 解绑时间 */
  unBindingTime = '';

  /** 解绑原因 */
  untieReason = '';
}

class OrderEvaluate {
  /**  订单表的单号 */
  clientOrderNo = '';

  /**  评价的内容 */
  content = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /**  手机 */
  mobile = '';

  /**  订单表OmsRequestOrder的ID */
  omsRequestOrderId = undefined;

  /**  主键ID */
  orderEvaluateId = undefined;

  /**  评价的分数 */
  score = undefined;

  /**  记录更新时间 */
  stampDate = '';

  /**  用户表Id */
  userId = undefined;
}

class OrderEvaluateParam {
  /** 订单号 */
  clientOrderNo = '';

  /** 评价内容,多个用逗号隔开(如AAA,BBB) */
  content = '';

  /** 订单id */
  omsRequestOrderId = undefined;

  /** 评价的分数 */
  score = undefined;
}

class OrderOperateRecordChangeVO {
  /** address */
  address = '';

  /** city */
  city = '';

  /** clientOrderNo */
  clientOrderNo = '';

  /** lat */
  lat = '';

  /** lng */
  lng = '';

  /** logisticsStatus */
  logisticsStatus = '';

  /** omsRequestOrderNo */
  omsRequestOrderNo = '';

  /** plateNumber */
  plateNumber = '';

  /** predictArriveTime */
  predictArriveTime = '';

  /** province */
  province = '';

  /** region */
  region = '';

  /** remark */
  remark = [];

  /** shippingOrderNo */
  shippingOrderNo = '';

  /** shippingWorkOrderNo */
  shippingWorkOrderNo = '';

  /** transportStatus */
  transportStatus = [];
}

class OrderOperateRecordVO {
  /** 当前位置 */
  address = '';

  /** 辅助确认收货状态 */
  assistStatus = '';

  /** 附件记录 */
  attachmentList = [];

  /** 承运商 */
  carrierName = '';

  /** 客户状态 */
  clientStatus = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** 数据来源 */
  dataSource = '';

  /** 司机姓名 */
  driverName = '';

  /** 司机手机 */
  driverPhone = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** 纬度 */
  lat = '';

  /** 经度 */
  lng = '';

  /** 物流日志 */
  logisticsStatus = '';

  /** omsOrderOperateRecordId */
  omsOrderOperateRecordId = undefined;

  /** 订单id */
  omsRequestOrderId = undefined;

  /** 订单状态 */
  orderStatus = '';

  /** 车牌号 */
  plateNumber = '';

  /** 备注 */
  remark = '';
}

class OrderReceiptVO {
  /** 当前位置 */
  address = '';

  /** 附件类型  1,电子回单(小黑卡用) 2.业务单据 3.过程图片 4.跟踪管理 */
  attachmentType = '';

  /** 附件url */
  attachmentUrls = [];

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** 是否异常，1：是；0：否 */
  isAbnormity = '';

  /** isDeleted */
  isDeleted = '';

  /** 经度 */
  lat = '';

  /** 经度 */
  lng = '';

  /** 订单id */
  omsRequestOrderId = undefined;

  /** 操作类型 1.接收 2.转出 3.发运 4.送达 5.当前位置上报 */
  operateType = '';

  /** 回单id */
  receiptOrderId = '';

  /** 回单状态 */
  receiptStatus = '';

  /** 回单类型。正常签收，异常签收 */
  receiptType = '';

  /** 备注 */
  remark = '';
}

class OrderVO {
  /** 当前设备所有的位置信息 */
  gpsData = [];

  /** 订单费用信息 */
  orderCostInfo = new OrderCostInfo();

  /** 操作日志 */
  orderOperateRecordVOs = [];

  /** 上报:上报事件和上报位置 */
  reportList = [];

  /** 设置上报节点 */
  reportNodeList = [];

  /** 匿名上报0：允许，1：不允许 */
  reportStatus = '';

  /** 订单主体 */
  requestOrderVO = new RequestOrderVO();
}

class Page {
  /** other */
  other = undefined;

  /** pageCount */
  pageCount = undefined;

  /** pageIndex */
  pageIndex = undefined;

  /** pageSize */
  pageSize = undefined;

  /** rows */
  rows = [];

  /** start */
  start = undefined;

  /** total */
  total = undefined;
}

class RealtimeDataDTO {
  /** 当日运量-件数 */
  dayGoodsNum = undefined;

  /** 当日运量-体积(立方) */
  dayGoodsVolume = undefined;

  /** 当日运量-重量(吨) */
  dayGoodsWeight = undefined;

  /** 当日订单数 */
  dayOrderNum = undefined;

  /** 飞线图数据 */
  flyLineData = [];

  /** 在途订车次 */
  inTransitCarNum = undefined;

  /** 在途订单数 */
  inTransitOrderNum = undefined;

  /** 实时消息内容 */
  orderMsgList = [];

  /** 回单待确认 */
  receiptedWaitConfirmOrderNum = undefined;

  /** 超时未送达 */
  unArrivedNum = undefined;

  /** 超时未提货 */
  unPickUpNum = undefined;

  /** 待派单数量 */
  waitSendOrderNum = undefined;
}

class RemarkDateVO {
  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** mobile */
  mobile = '';

  /** remark */
  remark = '';
}

class ReportedVO {
  /** 当前位置 */
  address = '';

  /** attachmentName */
  attachmentName = '';

  /** attachmentType */
  attachmentType = '';

  /** attachmentUrl */
  attachmentUrl = '';

  /** 附件url */
  attachmentUrls = [];

  /** businessKey */
  businessKey = undefined;

  /** 市 */
  city = '';

  /** 市编码 */
  cityCode = '';

  /** 业务单号 */
  clientOrderNo = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** id */
  id = undefined;

  /** 识别二维码标识 */
  identifierCode = '';

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isAbnormity */
  isAbnormity = '';

  /** isDeleted */
  isDeleted = '';

  /** 纬度 */
  lat = '';

  /** 经度 */
  lng = '';

  /** operateType */
  operateType = '';

  /** 省 */
  province = '';

  /** 省编码 */
  provinceCode = '';

  /** 回单类型。正常签收，异常签收 */
  receiptType = '';

  /** 区 */
  region = '';

  /** 区编码 */
  regionCode = '';

  /** remark */
  remark = '';

  /** 上报事件:车辆故障，堵车，事故，货物损坏 */
  reportEvent = '';
}

class RequestOrderParam {
  /** agentsNo */
  agentsNo = '';

  /** 业务员 */
  businessMan = '';

  /** 承运商 */
  carriersName = '';

  /** 业务单号 */
  clientOrderNo = '';

  /** 企业id集合 */
  companyIds = [];

  /** 企业名称 */
  companyName = '';

  /** 下单日期开始时间  */
  dateCreatedEnd = '';

  /** 下单日期开始时间 */
  dateCreatedStart = '';

  /** 提货结束时间 */
  deliveryDateEnd = '';

  /** 提货开始时间 */
  deliveryDateStart = '';

  /** 设备状态 */
  deviceStatus = '';

  /** 司机手机号 */
  driverPhone = '';

  /** GCJ02,WGS84,BD09 */
  gpsType = '';

  /** 订单id */
  id = undefined;

  /** 当前单据：回单未接受，2、历史单据：回单已接受 */
  isCurrent = '';

  /** 执行中，近期签收，历史签收 */
  isDataSign = '';

  /** isDeleted */
  isDeleted = '';

  /** 是否扫码查询0否，1是 */
  isScanCode = '';

  /** 业务单号喝设备号组合查询 */
  keyWord = '';

  /** 订单状态组合查询 */
  keyWordStatus = '';

  /** 订单状态组合查询,冗余字段 */
  keyWordStatusList = [];

  /** 小程序登陆手机号 */
  mobileNumber = '';

  /** 排除节点状态 */
  noLogisticsStatusList = [];

  /** 小程序排除的状态 */
  noStatus = '';

  /** 组织名称 */
  organizationName = '';

  /** pageSize */
  pageSize = undefined;

  /** 回单状态状态 */
  receiptStatus = '';

  /** 近期签收和历史签收状态 */
  recenStatus = '';

  /** 小程序近期签收时间 */
  recentDateEnd = '';

  /** 小程序近期签收时间 */
  recentDateStart = '';

  /** 设备序列号 */
  serialNo = '';

  /** 发货单位 */
  shipmentCompanyName = '';

  /** 发货人 */
  shipmentConsignor = '';

  /** start */
  start = undefined;

  /** 订单状态 */
  status = '';

  /** 收货单位 */
  unloadingCompanyName = '';

  /** 收货人 */
  unloadingConsignor = '';

  /** 获取表头参数 */
  userGridQueryParam = new UserGridQueryParam();
}

class RequestOrderTotals {
  /** 已送达总数 */
  arrivedTotal = undefined;

  /** 已派单总数 */
  assignTotal = undefined;

  /** 新建总数 */
  newOrderTotal = undefined;

  /** 已提货总数 */
  pickTotal = undefined;

  /** 回单待确认总数 */
  receiptTotal = undefined;

  /** 订单列表 */
  rows = new Page();

  /** 运输中总数 */
  transportTotal = undefined;
}

class RequestOrderVO {
  /** 地址 */
  address = '';

  /** 要求送达时间 */
  arrivalDate = '';

  /** 回单url */
  attachmentUrls = [];

  /** 业务员id */
  businessId = undefined;

  /** 业务员(来自用户) */
  businessMan = '';

  /** 业务员手机(来自用户) */
  businessPhone = '';

  /** 车辆id */
  carId = undefined;

  /** 承运商id */
  carrierInfoId = undefined;

  /** 承运商名称 */
  carrierName = '';

  /** 销售单号 */
  clientOrderNo = '';

  /** 企业id */
  companyInfoId = undefined;

  /** 企业名称 */
  companyName = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** 数据来源 */
  dataSource = '';

  /** 订单列表type:我收的，我发的 */
  dataType = '';

  /** 要求提货时间  */
  deliveryDate = '';

  /** 司机id */
  driverId = '';

  /** 司机名称 */
  driverName = '';

  /** 司机联系方式 */
  driverPhone = '';

  /** 订单导入字段错误说明 */
  errorMsg = '';

  /** 货物名称 */
  goodsName = '';

  /** 货物状态 */
  goodsStatus = '';

  /** id */
  id = undefined;

  /** 二维码标识 */
  identifierCode = '';

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** 纬度 */
  loclat = '';

  /** 经度 */
  loclng = '';

  /** omsRequestOrderId */
  omsRequestOrderId = undefined;

  /** 节点最新时间 */
  operateRecordDate = '';

  /** 节点最新状态 */
  operateRecordStatus = '';

  /** 组织名称 */
  organizationName = '';

  /** 车牌号 */
  plateNumber = '';

  /** 数量单位 */
  quantityUnit = '';

  /** 实际送达时间 */
  realityArrivalDate = '';

  /** 实际提货时间  */
  realityDeliveryDate = '';

  /** 回单备注 */
  receiptRemark = '';

  /** 回单状态 */
  receiptStatus = '';

  /** 签收类型，差异签收，正常签收 */
  receiptType = '';

  /** 收货状态 */
  receivedStatus = '';

  /** 物流订单备注 */
  remark = '';

  /** 设备序列号 */
  serialNo = '';

  /** 发货人详细地址  */
  shipmentAddress = '';

  /** 发货市 */
  shipmentCity = '';

  /** 发卸货市编码 */
  shipmentCityNo = '';

  /** 发货单位 */
  shipmentCompanyName = '';

  /** 发货单位编码 */
  shipmentCompanyNo = '';

  /** 发货人 */
  shipmentConsignor = '';

  /** 发货人联系电话  */
  shipmentContacts = '';

  /**  发货省 */
  shipmentProvince = '';

  /** 发货省代码 */
  shipmentProvinceNo = '';

  /** 发货区  */
  shipmentRegion = '';

  /** 发货区代码 */
  shipmentRegionNo = '';

  /** 货物信息 */
  shippingOrderVOs = [];

  /** 显示时间 */
  showTime = '';

  /**  订单状态  */
  status = '';

  /** 总费用 */
  totalCost = undefined;

  /** 总数量 */
  totalQuantity = undefined;

  /** 总体积 */
  totalVolume = undefined;

  /** 总重量 */
  totalWeight = undefined;

  /** 收货人详细地址 */
  unloadingAddress = '';

  /** 收货市 */
  unloadingCity = '';

  /** 收货市编码 */
  unloadingCityNo = '';

  /** 收货单位 */
  unloadingCompanyName = '';

  /** 收货单位编码 */
  unloadingCompanyNo = '';

  /** 收货人 */
  unloadingConsignor = '';

  /** 收货人联系电话 */
  unloadingContacts = '';

  /**  收货省 */
  unloadingProvince = '';

  /** 收货省代码  */
  unloadingProvinceNo = '';

  /** 收货区  */
  unloadingRegion = '';

  /** 收货区代码 */
  unloadingRegionNo = '';

  /** 体积单位 */
  volumeUnit = '';

  /** 重量单位 */
  weightUnit = '';
}

class ShippingOrderVO {
  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** 货物型号 */
  goodsModel = '';

  /** 货物名称 */
  goodsName = '';

  /** id */
  id = undefined;

  /** inputDate */
  inputDate = '';

  /** inputMan */
  inputMan = '';

  /** isDeleted */
  isDeleted = '';

  /** 物流订单ID */
  omsRequestOrderId = undefined;

  /** 数量 */
  quantity = undefined;

  /** 数量单位 */
  quantityUnit = '';

  /** 体积 */
  volume = undefined;

  /** 体积单位 */
  volumeUnit = '';

  /** 重量 */
  weight = undefined;

  /** 重量单位 */
  weightUnit = '';
}

class TransportRequirementVO {
  /** detail */
  detail = [];

  /** type */
  type = '';

  /** typeName */
  typeName = '';
}

class TransportStatusVO {
  /** address */
  address = '';

  /** afterDriverPhone */
  afterDriverPhone = '';

  /** afterLicensePlate */
  afterLicensePlate = '';

  /** city */
  city = '';

  /** cityCode */
  cityCode = '';

  /** createDate */
  createDate = '';

  /** createMan */
  createMan = '';

  /** lat */
  lat = '';

  /** lng */
  lng = '';

  /** orderStatus */
  orderStatus = '';

  /** province */
  province = '';

  /** provinceCode */
  provinceCode = '';

  /** region */
  region = '';

  /** regionCode */
  regionCode = '';
}

class UpdateEnableStatusParam {
  /** 代操作的承运商id列表 */
  carrierIds = [];

  /** 操作的状态 0启用 1禁用 */
  enableStatus = '';
}

class UserGridQueryParam {
  /** canSort */
  canSort = false;

  /** gridName */
  gridName = '';

  /** isDeleted */
  isDeleted = '';

  /** operatorId */
  operatorId = '';

  /** pageSize */
  pageSize = undefined;

  /** partyId */
  partyId = '';

  /** pinned */
  pinned = '';

  /** start */
  start = undefined;

  /** version */
  version = '';

  /** visibleFlag */
  visibleFlag = false;
}

class YesterdayDataDTO {
  /** 送达订单日环比 */
  arrivedOrderDayRate = undefined;

  /** 实际送达的订单量 */
  arrivedOrderNum = undefined;

  /** 送达订单周同比 */
  arrivedOrderWeekRate = undefined;

  /** 总费用日环比 */
  costDayRate = undefined;

  /** 总费用周同比 */
  costWeekRate = undefined;

  /** 准点率日环比 */
  onTimeDayRate = undefined;

  /** 送达准点率 */
  onTimeRate = undefined;

  /** 准点率周同比 */
  onTimeWeekRate = undefined;

  /** 订单量日环比 */
  orderDayRate = undefined;

  /** 订单量 */
  orderNum = undefined;

  /** 订单量周同比 */
  orderWeekRate = undefined;

  /** 总费用 */
  totalCost = undefined;

  /** 总体积(立方) */
  totalVolume = undefined;

  /** 总重量(吨) */
  totalWeight = undefined;

  /** 总体积日环比 */
  volumeDayRate = undefined;

  /** 总体积周同比 */
  volumeWeekRate = undefined;

  /** 总重量日环比 */
  weightDayRate = undefined;

  /** 总重量周同比 */
  weightWeekRate = undefined;
}

export const api1 = {
  AddressCreate,
  AddressDO,
  AddressQueryParam,
  AddressVO,
  BaseRes,
  BatchOperationParam,
  Car,
  CarBindDeviceParam,
  CarDTO,
  CarQueryParam,
  CarUpdateParam,
  CarrierCreateParam,
  CarrierInfo,
  CarrierQueryParam,
  CarrierUpdateParam,
  ConsigneInfoDO,
  ConsigneInfoVO,
  CostItem,
  DeleteByIdsParam,
  DeviceDo,
  DeviceParam,
  DevicesInfoVO,
  DevicesTrackRequest,
  DictionaryListParam,
  EyeTrackVO,
  GoodsInfoDO,
  GoodsInfoQueryParam,
  IotGpsVO,
  JSONObject,
  Map,
  OmsDictionaryDO,
  OrderBindParam,
  OrderCostDTO,
  OrderCostInfo,
  OrderDevicesDO,
  OrderDevicesInfoVO,
  OrderDevicesVO,
  OrderEvaluate,
  OrderEvaluateParam,
  OrderOperateRecordChangeVO,
  OrderOperateRecordVO,
  OrderReceiptVO,
  OrderVO,
  Page,
  RealtimeDataDTO,
  RemarkDateVO,
  ReportedVO,
  RequestOrderParam,
  RequestOrderTotals,
  RequestOrderVO,
  ShippingOrderVO,
  TransportRequirementVO,
  TransportStatusVO,
  UpdateEnableStatusParam,
  UserGridQueryParam,
  YesterdayDataDTO,
};
