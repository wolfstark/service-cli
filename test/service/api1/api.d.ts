type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace api1 {
    export class AddressCreate {
      /** addressCreate */
      addressCreate?: Array<defs.api1.AddressQueryParam>;

      /** consigneId */
      consigneId?: number;

      /** consigneName */
      consigneName?: string;
    }

    export class AddressDO {
      /** address */
      address?: string;

      /** addressNo */
      addressNo?: string;

      /** areaCode */
      areaCode?: string;

      /** city */
      city?: string;

      /** cityNo */
      cityNo?: string;

      /** consigneId */
      consigneId?: number;

      /** consigneName */
      consigneName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDefault */
      isDefault?: string;

      /** isDeleted */
      isDeleted?: string;

      /** lat */
      lat?: string;

      /** linkMan */
      linkMan?: string;

      /** lon */
      lon?: string;

      /** omsAddressId */
      omsAddressId?: number;

      /** partyId */
      partyId?: number;

      /** province */
      province?: string;

      /** provinceNo */
      provinceNo?: string;

      /** region */
      region?: string;

      /** regionNo */
      regionNo?: string;

      /** remark */
      remark?: string;

      /** tel */
      tel?: string;
    }

    export class AddressQueryParam {
      /** address */
      address?: string;

      /** addressNo */
      addressNo?: string;

      /** city */
      city?: string;

      /** cityNo */
      cityNo?: string;

      /** consigneId */
      consigneId?: number;

      /** consigneName */
      consigneName?: string;

      /** id */
      id?: number;

      /** isDefault */
      isDefault?: string;

      /** isDeleted */
      isDeleted?: string;

      /** keyWord */
      keyWord?: string;

      /** linkMan */
      linkMan?: string;

      /** omsAddressId */
      omsAddressId?: number;

      /** ordinarySearch */
      ordinarySearch?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: number;

      /** province */
      province?: string;

      /** provinceNo */
      provinceNo?: string;

      /** realName */
      realName?: string;

      /** region */
      region?: string;

      /** regionNo */
      regionNo?: string;

      /** remark */
      remark?: string;

      /** start */
      start?: number;

      /** tel */
      tel?: string;
    }

    export class AddressVO {
      /** address */
      address?: string;

      /** addressNo */
      addressNo?: string;

      /** areaCode */
      areaCode?: string;

      /** city */
      city?: string;

      /** cityNo */
      cityNo?: string;

      /** consigneId */
      consigneId?: number;

      /** consigneName */
      consigneName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDefault */
      isDefault?: string;

      /** isDeleted */
      isDeleted?: string;

      /** lat */
      lat?: string;

      /** linkMan */
      linkMan?: string;

      /** lon */
      lon?: string;

      /** omsAddressId */
      omsAddressId?: number;

      /** partyId */
      partyId?: number;

      /** province */
      province?: string;

      /** provinceNo */
      provinceNo?: string;

      /** region */
      region?: string;

      /** regionNo */
      regionNo?: string;

      /** remark */
      remark?: string;

      /** statementUnit */
      statementUnit?: string;

      /** tel */
      tel?: string;
    }

    export class BaseRes<T0 = any> {
      /** code */
      code?: number;

      /** data */
      data?: T0;

      /** message */
      message?: string;
    }

    export class BatchOperationParam {
      /** 地址 */
      address?: string;

      /** 车辆id */
      carId?: number;

      /** 承运商id */
      carrierInfoId?: number;

      /** 承运商名称 */
      carrierName?: string;

      /** 市 */
      city?: string;

      /** 司机名称 */
      driverName?: string;

      /** 司机联系方式 */
      driverPhone?: string;

      /** 订单id集合 */
      ids?: Array<number>;

      /** 纬 */
      loclat?: string;

      /** 经 */
      loclng?: string;

      /** 操作：派单，提货，送达，发运 */
      operationType?: string;

      /** 车辆号 */
      plateNumber?: string;

      /** 省 */
      province?: string;

      /** 区 */
      region?: string;

      /** 时间 */
      time?: string;
    }

    export class Car {
      /**  额定载重 */
      capacity?: number;

      /**  主键ID */
      carId?: number;

      /**  车长 */
      carLength?: number;

      /**  车辆编号 */
      carNo?: string;

      /**  车辆类型 */
      carType?: string;

      /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
      carrierInfoId?: number;

      /**  公司id */
      companyInfoId?: number;

      /**  企业名称 */
      companyName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  绑定设备号 */
      deviceNo?: string;

      /**  司机姓名 */
      driverName?: string;

      /**  司机手机号 */
      driverPhone?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /**  机动车辆类型 */
      motorVehicleType?: string;

      /**  组织名称 */
      organizationName?: string;

      /**  会员ID */
      partyId?: number;

      /**  车牌号 */
      plateNumber?: string;

      /**  备注 */
      remark?: string;

      /**  记录更新时间 */
      stampDate?: string;

      /**  额定体积 */
      volume?: number;
    }

    export class CarBindDeviceParam {
      /**  车辆id */
      carId: number;

      /**  绑定设备号 */
      deviceNo: string;

      /** 设备类型 小黑卡，中交兴路 */
      deviceType?: string;

      /**  车牌号 */
      plateNumber: string;
    }

    export class CarDTO {
      /**  额定载重 */
      capacity?: number;

      /**  主键ID */
      carId?: number;

      /**  车长 */
      carLength?: number;

      /**  车辆编号 */
      carNo?: string;

      /**  车辆类型 */
      carType?: string;

      /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
      carrierInfoId?: number;

      /**  承运商名称 */
      carrierName?: string;

      /**  公司id */
      companyInfoId?: number;

      /**  企业名称 */
      companyName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  绑定设备号 */
      deviceNo?: string;

      /**  司机姓名 */
      driverName?: string;

      /**  司机手机号 */
      driverPhone?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** 地址信息 */
      iotGpsVO?: defs.api1.IotGpsVO;

      /** isDeleted */
      isDeleted?: string;

      /**  机动车辆类型 */
      motorVehicleType?: string;

      /**  组织名称 */
      organizationName?: string;

      /**  会员ID */
      partyId?: number;

      /**  车牌号 */
      plateNumber?: string;

      /**  备注 */
      remark?: string;

      /**  记录更新时间 */
      stampDate?: string;

      /**  额定体积 */
      volume?: number;
    }

    export class CarQueryParam {
      /**  车辆类型 */
      carType?: string;

      /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
      carrierInfoId?: number;

      /** companyInfoId */
      companyInfoId?: number;

      /** driverPhone */
      driverPhone?: string;

      /** enableStatus */
      enableStatus?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 关键字：车牌，司机姓名，手机号的模糊查询 */
      keyWord?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: number;

      /** plateNumber */
      plateNumber?: string;

      /** realName */
      realName?: string;

      /** start */
      start?: number;
    }

    export class CarUpdateParam {
      /**  额定载重 */
      capacity?: number;

      /**  车辆Id */
      carId?: number;

      /**  车长 */
      carLength?: number;

      /**  车辆类型 */
      carType?: string;

      /**  承运商表CarrierInfo的ID,承运商车辆会存在 */
      carrierInfoId?: number;

      /**  承运商名称 */
      carrierName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  绑定设备号 */
      deviceNo?: string;

      /**  司机姓名 */
      driverName?: string;

      /**  司机手机号 */
      driverPhone?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /**  机动车辆类型 */
      motorVehicleType?: string;

      /**  会员ID */
      partyId?: number;

      /**  车牌号 */
      plateNumber: string;

      /**  备注 */
      remark?: string;

      /**  额定体积 */
      volume?: number;
    }

    export class CarrierCreateParam {
      /**  详细地址 */
      address?: string;

      /**  承运商名称 */
      carrierName: string;

      /**  市 */
      city?: string;

      /**  市编号 */
      cityNo?: string;

      /**  公司id */
      companyInfoId?: number;

      /**  企业名称 */
      companyName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  邮箱 */
      email?: string;

      /**  启用状态 */
      enableStatus?: string;

      /** id */
      id?: number;

      /**  身份证号码 */
      identityNumber: string;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /**  发票抬头 */
      invoiceTitle: string;

      /** isDeleted */
      isDeleted?: string;

      /**  联系人 */
      linkMan: string;

      /**  组织名称 */
      organizationName?: string;

      /**  会员ID */
      partyId?: number;

      /**  承运商电话 */
      phone: string;

      /**  省 */
      province?: string;

      /**  省编号 */
      provinceNo?: string;

      /**  区 */
      region?: string;

      /**  区编号 */
      regionNo?: string;

      /**  备注信息 */
      remark?: string;

      /**  税号 */
      taxNo?: string;

      /**  税率 */
      taxRate: number;

      /**  联系人电话 */
      tel?: string;
    }

    export class CarrierInfo {
      /**  详细地址 */
      address?: string;

      /**  ID */
      carrierInfoId?: number;

      /**  承运商名称 */
      carrierName?: string;

      /**  承运商编码 */
      carrierNo?: string;

      /**  市 */
      city?: string;

      /**  市编号 */
      cityNo?: string;

      /**  公司id */
      companyInfoId?: number;

      /**  企业名称 */
      companyName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  邮箱 */
      email?: string;

      /**  启用状态 */
      enableStatus?: string;

      /** id */
      id?: number;

      /**  身份证号码 */
      identityNumber?: string;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /**  发票抬头 */
      invoiceTitle?: string;

      /** isDeleted */
      isDeleted?: string;

      /**  联系人 */
      linkMan?: string;

      /**  组织名称 */
      organizationName?: string;

      /**  会员ID */
      partyId?: number;

      /**  承运商电话 */
      phone?: string;

      /**  省 */
      province?: string;

      /**  省编号 */
      provinceNo?: string;

      /**  区 */
      region?: string;

      /**  区编号 */
      regionNo?: string;

      /**  备注信息 */
      remark?: string;

      /** stampDate */
      stampDate?: string;

      /**  税号 */
      taxNo?: string;

      /**  税率 */
      taxRate?: number;

      /**  联系人电话 */
      tel?: string;
    }

    export class CarrierQueryParam {
      /** 详细地址 */
      address?: string;

      /** 承运商名称 */
      carrierName?: string;

      /** carrierNo */
      carrierNo?: string;

      /** 市 */
      city?: string;

      /** 市编号 */
      cityNo?: string;

      /** companyInfoId */
      companyInfoId?: number;

      /** enableStatus */
      enableStatus?: string;

      /** 身份证号码 */
      identityNumber?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 关键字 */
      keyWord?: string;

      /** 联系人 */
      linkMan?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: number;

      /** 承运商电话 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 省编号 */
      provinceNo?: string;

      /** realName */
      realName?: string;

      /** 区 */
      region?: string;

      /** 区编号 */
      regionNo?: string;

      /** start */
      start?: number;

      /** 联系人电话 */
      tel?: string;
    }

    export class CarrierUpdateParam {
      /**  详细地址 */
      address?: string;

      /**  承运商名称 */
      carrierName: string;

      /**  市 */
      city?: string;

      /**  市编号 */
      cityNo?: string;

      /**  公司id */
      companyInfoId?: number;

      /**  企业名称 */
      companyName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  邮箱 */
      email?: string;

      /**  启用状态 */
      enableStatus?: string;

      /**  承运商名称 */
      id: number;

      /**  身份证号码 */
      identityNumber: string;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /**  发票抬头 */
      invoiceTitle: string;

      /** isDeleted */
      isDeleted?: string;

      /**  联系人 */
      linkMan: string;

      /**  组织名称 */
      organizationName?: string;

      /**  会员ID */
      partyId?: number;

      /**  承运商电话 */
      phone: string;

      /**  省 */
      province?: string;

      /**  省编号 */
      provinceNo?: string;

      /**  区 */
      region?: string;

      /**  区编号 */
      regionNo?: string;

      /**  备注信息 */
      remark?: string;

      /**  税号 */
      taxNo?: string;

      /**  税率 */
      taxRate: number;

      /**  联系人电话 */
      tel?: string;
    }

    export class ConsigneInfoDO {
      /** address */
      address?: string;

      /** city */
      city?: string;

      /** cityNo */
      cityNo?: string;

      /** consigneNo */
      consigneNo?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** invoiceTitle */
      invoiceTitle?: string;

      /** isDeleted */
      isDeleted?: string;

      /** linkMan */
      linkMan?: string;

      /** name */
      name?: string;

      /** omsConsigneInfoId */
      omsConsigneInfoId?: number;

      /** partyId */
      partyId?: number;

      /** province */
      province?: string;

      /** provinceNo */
      provinceNo?: string;

      /** region */
      region?: string;

      /** regionNo */
      regionNo?: string;

      /** remark */
      remark?: string;

      /** statementUnit */
      statementUnit?: string;

      /** taxNo */
      taxNo?: string;

      /** tel */
      tel?: string;

      /** type */
      type?: string;
    }

    export class ConsigneInfoVO {
      /** address */
      address?: string;

      /** city */
      city?: string;

      /** cityNo */
      cityNo?: string;

      /** consigneInfoIds */
      consigneInfoIds?: Array<number>;

      /** consigneNo */
      consigneNo?: string;

      /** inRegion */
      inRegion?: string;

      /** invoiceTitle */
      invoiceTitle?: string;

      /** isDeleted */
      isDeleted?: string;

      /** keyWord */
      keyWord?: string;

      /** linkMan */
      linkMan?: string;

      /** name */
      name?: string;

      /** omsConsigneInfoId */
      omsConsigneInfoId?: number;

      /** ordinarySearch */
      ordinarySearch?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: number;

      /** province */
      province?: string;

      /** provinceNo */
      provinceNo?: string;

      /** realName */
      realName?: string;

      /** region */
      region?: string;

      /** regionNo */
      regionNo?: string;

      /** remark */
      remark?: string;

      /** serialNum */
      serialNum?: number;

      /** start */
      start?: number;

      /** statementUnit */
      statementUnit?: string;

      /** taxNo */
      taxNo?: string;

      /** tel */
      tel?: string;

      /** type */
      type?: string;

      /** typeList */
      typeList?: Array<string>;
    }

    export class CostItem {
      /**  签约企业IloopContractedCompany表的ID */
      companyId?: number;

      /**  主键ID */
      costItemId?: number;

      /**  费用项的顺序索引 */
      costItemIndex?: number;

      /**  费用项说明 */
      costItemInfo?: string;

      /**  费用项名称 */
      costItemName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /**  启用状态: 0 启用；1 停用 */
      enableStatus?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /**  费用项名称 + 增加；- 扣减 */
      operationType?: string;

      /**  记录更新时间 */
      stampDate?: string;
    }

    export class DeleteByIdsParam {
      /** id列表 */
      id: Array<number>;
    }

    export class DeviceDo {
      /** 所属企业 */
      affiliatedCompany?: string;

      /** 所属企业id */
      affiliatedCompanyId?: number;

      /** 所属运营商 */
      affiliatedOperator?: string;

      /** 所属运营商id */
      affiliatedOperatorId?: number;

      /** 绑定状态 (0绑定 1未绑定) */
      bindingStatus?: string;

      /** 业务单号 */
      clientOrderNo?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** 设备编码(预留字段) */
      deviceCode?: string;

      /** 设备名称 */
      deviceName?: string;

      /** 设备状态(0启用 1未启用 2停用) */
      deviceStatus?: string;

      /** 设备类型 */
      deviceType?: string;

      /** iccid(卡号) */
      iccid?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 在线状态 (0在线 1离线) */
      onlineStatus?: string;

      /** 会员ID */
      partyId?: number;

      /** 最近绑定时间 */
      recentlyBoundTime?: string;

      /** 最近上报时间 */
      recentlyReportedTime?: string;

      /** 发展人 */
      referencePerson?: string;

      /** 设备序列号 */
      serialNo?: string;

      /** 软件版本号 */
      softwareVersionNum?: string;

      /** 跟踪对象名称 */
      trackName?: string;
    }

    export class DeviceParam {
      /** 签约企业(新增或修改设备时,该参数必传) */
      affiliatedCompany?: string;

      /** 所属企业ID */
      affiliatedCompanyId?: number;

      /** affiliatedCompanyIds */
      affiliatedCompanyIds?: Array<number>;

      /** 运营组织(新增或修改设备时,该参数必传) */
      affiliatedOperator?: string;

      /** 所属运营商ID */
      affiliatedOperatorId?: number;

      /** 截止创建日期 */
      createDateEnd?: string;

      /** 起始创建日期 */
      createDateStart?: string;

      /** 设备编码(预留字段) */
      deviceCode?: string;

      /** 设备名称 */
      deviceName?: string;

      /** 设备状态(0启用 1未启用 2停用) */
      deviceStatus?: string;

      /** 设备类型 */
      deviceType?: string;

      /** 卡号 */
      iccid?: string;

      /** 设备id(修改或删除时该参数必传) */
      id?: number;

      /** isDeleted */
      isDeleted?: string;

      /** 在线状态 (0在线 1离线) */
      onlineStatus?: string;

      /** pageSize */
      pageSize?: number;

      /** 发展人 */
      referencePerson?: string;

      /** 设备序列号(新增或修改设备时,该参数必传) */
      serialNo?: string;

      /** 来源    0 运营pc端调用  1货主pc端调用 */
      source?: string;

      /** start */
      start?: number;

      /** 跟踪对象名称 */
      trackName?: string;
    }

    export class DevicesInfoVO {
      /** 绑定设备总数 */
      bindingTotal?: number;

      /** 离线设备总数 */
      lineTotal?: number;

      /** 设备列表 */
      page?: defs.api1.Page<defs.api1.OrderDevicesInfoVO>;

      /** 待回收设备总数 */
      recycleTotal?: number;

      /** 全部设备总数 */
      total?: number;

      /** 未绑定设备总数 */
      unBindingTotal?: number;
    }

    export class DevicesTrackRequest {
      /** devicesNo */
      devicesNo?: string;

      /** endCreateDate */
      endCreateDate?: string;

      /** startCreateDate */
      startCreateDate?: string;
    }

    export class DictionaryListParam {
      /** clientOrderNo */
      clientOrderNo?: string;

      /** description */
      description?: string;

      /** isDeleted */
      isDeleted?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: number;

      /** realName */
      realName?: string;

      /** start */
      start?: number;

      /** type */
      type?: string;

      /** typeName */
      typeName?: string;
    }

    export class EyeTrackVO {
      /** 天眼跟单列表 */
      page?: defs.api1.Page<defs.api1.RequestOrderVO>;

      /** 历史签收总数 */
      pastCount?: number;

      /** 近期签收总数 */
      recentCount?: number;

      /** 执行中总数 */
      runningCount?: number;
    }

    export class GoodsInfoDO {
      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** goodsModelNo */
      goodsModelNo?: string;

      /** goodsName */
      goodsName?: string;

      /** goodsNo */
      goodsNo?: string;

      /** goodsPackage */
      goodsPackage?: string;

      /** goodsType */
      goodsType?: string;

      /** goodsUnit */
      goodsUnit?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** packingType */
      packingType?: string;

      /** partyId */
      partyId?: number;

      /** remark */
      remark?: string;
    }

    export class GoodsInfoQueryParam {
      /** goodsModelNo */
      goodsModelNo?: string;

      /** goodsName */
      goodsName?: string;

      /** goodsNo */
      goodsNo?: string;

      /** goodsPackage */
      goodsPackage?: string;

      /** goodsType */
      goodsType?: string;

      /** goodsUnit */
      goodsUnit?: string;

      /** id */
      id?: number;

      /** isDeleted */
      isDeleted?: string;

      /** keyWord */
      keyWord?: string;

      /** packingType */
      packingType?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: number;

      /** realName */
      realName?: string;

      /** remark */
      remark?: string;

      /** start */
      start?: number;
    }

    export class IotGpsVO {
      /** 详细地址 */
      address?: string;

      /** 中交兴路id */
      carLocationId?: number;

      /** 承运商名称 */
      carrierName?: string;

      /** city */
      city?: string;

      /** 上报人 */
      createMan?: string;

      /** 数据来源 */
      dataSource?: string;

      /** deviceid */
      deviceid?: string;

      /** 司机手机 */
      driverPhone?: string;

      /** isout */
      isout?: string;

      /** loclat */
      loclat?: string;

      /** loclng */
      loclng?: string;

      /** 物流状态日志 */
      logisticsStatus?: string;

      /** omsOrderOperateRecordId */
      omsOrderOperateRecordId?: number;

      /** 订单状态 */
      orderStatus?: string;

      /** 车辆号 */
      plateNumber?: string;

      /** province */
      province?: string;

      /** region */
      region?: string;

      /** 设备号 */
      serialNo?: string;

      /** 显示时间 */
      showTime?: string;

      /** time */
      time?: string;
    }

    export class JSONObject {}

    export class Map<T0 = any, T1 = any> {}

    export class OmsDictionaryDO {
      /** code */
      code?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** description */
      description?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** partyId */
      partyId?: number;

      /** type */
      type?: string;

      /** typeName */
      typeName?: string;
    }

    export class OrderBindParam {
      /** 业务单号 */
      clientOrderNo?: string;

      /** 设备序列号 */
      serialNo?: string;

      /** 绑定对象 */
      trackName?: string;

      /** 解绑原因 */
      untieReason?: string;
    }

    export class OrderCostDTO {
      /** clientOrderNo */
      clientOrderNo?: string;

      /** 费用 */
      cost?: number;

      /** 费用项id */
      costItemId?: number;

      /** 费用项名称 */
      costItemName?: string;

      /** operationType */
      operationType?: string;
    }

    export class OrderCostInfo {
      /** 订单号 */
      clientOrderNo?: string;

      /** 费用列表 */
      orderCosts?: Array<defs.api1.OrderCostDTO>;

      /** 费用总计 */
      totalCost?: number;
    }

    export class OrderDevicesDO {
      /** 绑定时间 */
      bindingTime?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 设备id */
      omsDeviceId?: number;

      /** 订单id */
      omsRequestOrderId?: number;

      /** 备注 */
      remark?: string;

      /** 跟踪对象名称 */
      trackName?: string;

      /** 类型 0=其他，1=车辆，2=订单 */
      type?: string;

      /** 解绑时间 */
      unBindingTime?: string;

      /** 解绑原因 */
      untieReason?: string;
    }

    export class OrderDevicesInfoVO {
      /** 当前与订单绑定的设备绑定状态:BindingStatus：[绑定，未绑定，待回收，绑定离线，未绑定离线 ] */
      bindingStatus?: string;

      /** bindingTime */
      bindingTime?: string;

      /** 业务单号 */
      clientOrderNo?: string;

      /** 订单结束时间 */
      endCreateDate?: string;

      /** 当前设备所有的位置信息 */
      gpsData?: Array<defs.api1.IotGpsVO>;

      /** 当前设备最后位置信息，纬度 */
      loclat?: string;

      /** 当前设备最后位置信息，经度 */
      loclng?: string;

      /** 订单id */
      omsRequestOrderId?: number;

      /** 当前订单节点信息 */
      orderOperateRecord?: Array<defs.api1.OrderOperateRecordChangeVO>;

      /** 跟踪对象备注 */
      remark?: string;

      /** 当前与订单绑定的设备序列号 */
      serialNo?: string;

      /** 发货人详细地址 */
      shipmentAddress?: string;

      /** 发货市 */
      shipmentCity?: string;

      /** 发货省 */
      shipmentProvince?: string;

      /** 发货区 */
      shipmentRegion?: string;

      /** 当前设备最后位置信息:显示时间 */
      showTime?: string;

      /** 订单开始时间 */
      startCreateDate?: string;

      /** 订单状态 */
      status?: string;

      /** 上报时间 */
      time?: string;

      /** 跟踪对象名称 */
      trackName?: string;

      /** 上报节点信息 */
      transportList?: Array<defs.api1.IotGpsVO>;

      /** unBindingTime */
      unBindingTime?: string;

      /** 收货人详细地址 */
      unloadingAddress?: string;

      /** 收货市 */
      unloadingCity?: string;

      /** 收货省 */
      unloadingProvince?: string;

      /** 收货区 */
      unloadingRegion?: string;
    }

    export class OrderDevicesVO {
      /** 所属企业 */
      affiliatedCompany?: string;

      /** 所属运营商 */
      affiliatedOperator?: string;

      /** 绑定人 */
      bindingMan?: string;

      /** 绑定状态 (0绑定 1未绑定) */
      bindingStatus?: string;

      /** 绑定时间 */
      bindingTime?: string;

      /** 业务单号 */
      clientOrderNo?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** 设备编码(预留字段) */
      deviceCode?: string;

      /** 设备状态(0启用 1未启用 2停用) */
      deviceStatus?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 设备id */
      omsDeviceId?: number;

      /** 订单id */
      omsRequestOrderId?: number;

      /** 在线状态 (0在线 1离线) */
      onlineStatus?: string;

      /** 最近绑定时间 */
      recentlyBoundTime?: string;

      /** 最近上报时间 */
      recentlyReportedTime?: string;

      /** 发展人 */
      referencePerson?: string;

      /** 备注 */
      remark?: string;

      /** 物流订单号 */
      requestOrderNo?: string;

      /** 设备序列号 */
      serialNo?: string;

      /** 跟踪对象名称 */
      trackName?: string;

      /** 类型 0=其他，1=车辆，2=订单 */
      type?: string;

      /** 解绑人 */
      unBindingMan?: string;

      /** 解绑时间 */
      unBindingTime?: string;

      /** 解绑原因 */
      untieReason?: string;
    }

    export class OrderEvaluate {
      /**  订单表的单号 */
      clientOrderNo?: string;

      /**  评价的内容 */
      content?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /**  手机 */
      mobile?: string;

      /**  订单表OmsRequestOrder的ID */
      omsRequestOrderId?: number;

      /**  主键ID */
      orderEvaluateId?: number;

      /**  评价的分数 */
      score?: number;

      /**  记录更新时间 */
      stampDate?: string;

      /**  用户表Id */
      userId?: number;
    }

    export class OrderEvaluateParam {
      /** 订单号 */
      clientOrderNo?: string;

      /** 评价内容,多个用逗号隔开(如AAA,BBB) */
      content?: string;

      /** 订单id */
      omsRequestOrderId?: number;

      /** 评价的分数 */
      score?: number;
    }

    export class OrderOperateRecordChangeVO {
      /** address */
      address?: string;

      /** city */
      city?: string;

      /** clientOrderNo */
      clientOrderNo?: string;

      /** lat */
      lat?: string;

      /** lng */
      lng?: string;

      /** logisticsStatus */
      logisticsStatus?: string;

      /** omsRequestOrderNo */
      omsRequestOrderNo?: string;

      /** plateNumber */
      plateNumber?: string;

      /** predictArriveTime */
      predictArriveTime?: string;

      /** province */
      province?: string;

      /** region */
      region?: string;

      /** remark */
      remark?: Array<defs.api1.RemarkDateVO>;

      /** shippingOrderNo */
      shippingOrderNo?: string;

      /** shippingWorkOrderNo */
      shippingWorkOrderNo?: string;

      /** transportStatus */
      transportStatus?: Array<defs.api1.TransportStatusVO>;
    }

    export class OrderOperateRecordVO {
      /** 当前位置 */
      address?: string;

      /** 辅助确认收货状态 */
      assistStatus?: string;

      /** 附件记录 */
      attachmentList?: Array<string>;

      /** 承运商 */
      carrierName?: string;

      /** 客户状态 */
      clientStatus?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** 数据来源 */
      dataSource?: string;

      /** 司机姓名 */
      driverName?: string;

      /** 司机手机 */
      driverPhone?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 纬度 */
      lat?: string;

      /** 经度 */
      lng?: string;

      /** 物流日志 */
      logisticsStatus?: string;

      /** omsOrderOperateRecordId */
      omsOrderOperateRecordId?: number;

      /** 订单id */
      omsRequestOrderId?: number;

      /** 订单状态 */
      orderStatus?: string;

      /** 车牌号 */
      plateNumber?: string;

      /** 备注 */
      remark?: string;
    }

    export class OrderReceiptVO {
      /** 当前位置 */
      address?: string;

      /** 附件类型  1,电子回单(小黑卡用) 2.业务单据 3.过程图片 4.跟踪管理 */
      attachmentType?: string;

      /** 附件url */
      attachmentUrls?: Array<string>;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** 是否异常，1：是；0：否 */
      isAbnormity?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 经度 */
      lat?: string;

      /** 经度 */
      lng?: string;

      /** 订单id */
      omsRequestOrderId?: number;

      /** 操作类型 1.接收 2.转出 3.发运 4.送达 5.当前位置上报 */
      operateType?: string;

      /** 回单id */
      receiptOrderId?: string;

      /** 回单状态 */
      receiptStatus?: string;

      /** 回单类型。正常签收，异常签收 */
      receiptType?: string;

      /** 备注 */
      remark?: string;
    }

    export class OrderVO {
      /** 当前设备所有的位置信息 */
      gpsData?: Array<defs.api1.IotGpsVO>;

      /** 订单费用信息 */
      orderCostInfo?: defs.api1.OrderCostInfo;

      /** 操作日志 */
      orderOperateRecordVOs?: Array<defs.api1.OrderOperateRecordVO>;

      /** 上报:上报事件和上报位置 */
      reportList?: Array<string>;

      /** 设置上报节点 */
      reportNodeList?: Array<string>;

      /** 匿名上报0：允许，1：不允许 */
      reportStatus?: string;

      /** 订单主体 */
      requestOrderVO?: defs.api1.RequestOrderVO;
    }

    export class Page<T0 = any> {
      /** other */
      other?: object;

      /** pageCount */
      pageCount?: number;

      /** pageIndex */
      pageIndex?: number;

      /** pageSize */
      pageSize?: number;

      /** rows */
      rows?: Array<T0>;

      /** start */
      start?: number;

      /** total */
      total?: number;
    }

    export class RealtimeDataDTO {
      /** 当日运量-件数 */
      dayGoodsNum?: number;

      /** 当日运量-体积(立方) */
      dayGoodsVolume?: number;

      /** 当日运量-重量(吨) */
      dayGoodsWeight?: number;

      /** 当日订单数 */
      dayOrderNum?: number;

      /** 飞线图数据 */
      flyLineData?: Array<object>;

      /** 在途订车次 */
      inTransitCarNum?: number;

      /** 在途订单数 */
      inTransitOrderNum?: number;

      /** 实时消息内容 */
      orderMsgList?: Array<string>;

      /** 回单待确认 */
      receiptedWaitConfirmOrderNum?: number;

      /** 超时未送达 */
      unArrivedNum?: number;

      /** 超时未提货 */
      unPickUpNum?: number;

      /** 待派单数量 */
      waitSendOrderNum?: number;
    }

    export class RemarkDateVO {
      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** mobile */
      mobile?: string;

      /** remark */
      remark?: string;
    }

    export class ReportedVO {
      /** 当前位置 */
      address?: string;

      /** attachmentName */
      attachmentName?: string;

      /** attachmentType */
      attachmentType?: string;

      /** attachmentUrl */
      attachmentUrl?: string;

      /** 附件url */
      attachmentUrls?: Array<string>;

      /** businessKey */
      businessKey?: number;

      /** 市 */
      city?: string;

      /** 市编码 */
      cityCode?: string;

      /** 业务单号 */
      clientOrderNo?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** id */
      id?: number;

      /** 识别二维码标识 */
      identifierCode?: string;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isAbnormity */
      isAbnormity?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 纬度 */
      lat?: string;

      /** 经度 */
      lng?: string;

      /** operateType */
      operateType?: string;

      /** 省 */
      province?: string;

      /** 省编码 */
      provinceCode?: string;

      /** 回单类型。正常签收，异常签收 */
      receiptType?: string;

      /** 区 */
      region?: string;

      /** 区编码 */
      regionCode?: string;

      /** remark */
      remark?: string;

      /** 上报事件:车辆故障，堵车，事故，货物损坏 */
      reportEvent?: string;
    }

    export class RequestOrderParam {
      /** agentsNo */
      agentsNo?: string;

      /** 业务员 */
      businessMan?: string;

      /** 承运商 */
      carriersName?: string;

      /** 业务单号 */
      clientOrderNo?: string;

      /** 企业id集合 */
      companyIds?: Array<number>;

      /** 企业名称 */
      companyName?: string;

      /** 下单日期开始时间  */
      dateCreatedEnd?: string;

      /** 下单日期开始时间 */
      dateCreatedStart?: string;

      /** 提货结束时间 */
      deliveryDateEnd?: string;

      /** 提货开始时间 */
      deliveryDateStart?: string;

      /** 设备状态 */
      deviceStatus?: string;

      /** 司机手机号 */
      driverPhone?: string;

      /** GCJ02,WGS84,BD09 */
      gpsType?: string;

      /** 订单id */
      id?: number;

      /** 当前单据：回单未接受，2、历史单据：回单已接受 */
      isCurrent?: string;

      /** 执行中，近期签收，历史签收 */
      isDataSign?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 是否扫码查询0否，1是 */
      isScanCode?: string;

      /** 业务单号喝设备号组合查询 */
      keyWord?: string;

      /** 订单状态组合查询 */
      keyWordStatus?: string;

      /** 订单状态组合查询,冗余字段 */
      keyWordStatusList?: Array<string>;

      /** 小程序登陆手机号 */
      mobileNumber?: string;

      /** 排除节点状态 */
      noLogisticsStatusList?: Array<string>;

      /** 小程序排除的状态 */
      noStatus?: string;

      /** 组织名称 */
      organizationName?: string;

      /** pageSize */
      pageSize?: number;

      /** 回单状态状态 */
      receiptStatus?: string;

      /** 近期签收和历史签收状态 */
      recenStatus?: string;

      /** 小程序近期签收时间 */
      recentDateEnd?: string;

      /** 小程序近期签收时间 */
      recentDateStart?: string;

      /** 设备序列号 */
      serialNo?: string;

      /** 发货单位 */
      shipmentCompanyName?: string;

      /** 发货人 */
      shipmentConsignor?: string;

      /** start */
      start?: number;

      /** 订单状态 */
      status?: string;

      /** 收货单位 */
      unloadingCompanyName?: string;

      /** 收货人 */
      unloadingConsignor?: string;

      /** 获取表头参数 */
      userGridQueryParam?: defs.api1.UserGridQueryParam;
    }

    export class RequestOrderTotals {
      /** 已送达总数 */
      arrivedTotal?: number;

      /** 已派单总数 */
      assignTotal?: number;

      /** 新建总数 */
      newOrderTotal?: number;

      /** 已提货总数 */
      pickTotal?: number;

      /** 回单待确认总数 */
      receiptTotal?: number;

      /** 订单列表 */
      rows?: defs.api1.Page<defs.api1.RequestOrderVO>;

      /** 运输中总数 */
      transportTotal?: number;
    }

    export class RequestOrderVO {
      /** 地址 */
      address?: string;

      /** 要求送达时间 */
      arrivalDate?: string;

      /** 回单url */
      attachmentUrls?: Array<string>;

      /** 业务员id */
      businessId?: number;

      /** 业务员(来自用户) */
      businessMan?: string;

      /** 业务员手机(来自用户) */
      businessPhone?: string;

      /** 车辆id */
      carId?: number;

      /** 承运商id */
      carrierInfoId?: number;

      /** 承运商名称 */
      carrierName?: string;

      /** 销售单号 */
      clientOrderNo?: string;

      /** 企业id */
      companyInfoId?: number;

      /** 企业名称 */
      companyName?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** 数据来源 */
      dataSource?: string;

      /** 订单列表type:我收的，我发的 */
      dataType?: string;

      /** 要求提货时间  */
      deliveryDate?: string;

      /** 司机id */
      driverId?: string;

      /** 司机名称 */
      driverName?: string;

      /** 司机联系方式 */
      driverPhone?: string;

      /** 订单导入字段错误说明 */
      errorMsg?: string;

      /** 货物名称 */
      goodsName?: string;

      /** 货物状态 */
      goodsStatus?: string;

      /** id */
      id?: number;

      /** 二维码标识 */
      identifierCode?: string;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 纬度 */
      loclat?: string;

      /** 经度 */
      loclng?: string;

      /** omsRequestOrderId */
      omsRequestOrderId?: number;

      /** 节点最新时间 */
      operateRecordDate?: string;

      /** 节点最新状态 */
      operateRecordStatus?: string;

      /** 组织名称 */
      organizationName?: string;

      /** 车牌号 */
      plateNumber?: string;

      /** 数量单位 */
      quantityUnit?: string;

      /** 实际送达时间 */
      realityArrivalDate?: string;

      /** 实际提货时间  */
      realityDeliveryDate?: string;

      /** 回单备注 */
      receiptRemark?: string;

      /** 回单状态 */
      receiptStatus?: string;

      /** 签收类型，差异签收，正常签收 */
      receiptType?: string;

      /** 收货状态 */
      receivedStatus?: string;

      /** 物流订单备注 */
      remark?: string;

      /** 设备序列号 */
      serialNo?: string;

      /** 发货人详细地址  */
      shipmentAddress?: string;

      /** 发货市 */
      shipmentCity?: string;

      /** 发卸货市编码 */
      shipmentCityNo?: string;

      /** 发货单位 */
      shipmentCompanyName?: string;

      /** 发货单位编码 */
      shipmentCompanyNo?: string;

      /** 发货人 */
      shipmentConsignor?: string;

      /** 发货人联系电话  */
      shipmentContacts?: string;

      /**  发货省 */
      shipmentProvince?: string;

      /** 发货省代码 */
      shipmentProvinceNo?: string;

      /** 发货区  */
      shipmentRegion?: string;

      /** 发货区代码 */
      shipmentRegionNo?: string;

      /** 货物信息 */
      shippingOrderVOs?: Array<defs.api1.ShippingOrderVO>;

      /** 显示时间 */
      showTime?: string;

      /**  订单状态  */
      status?: string;

      /** 总费用 */
      totalCost?: number;

      /** 总数量 */
      totalQuantity?: number;

      /** 总体积 */
      totalVolume?: number;

      /** 总重量 */
      totalWeight?: number;

      /** 收货人详细地址 */
      unloadingAddress?: string;

      /** 收货市 */
      unloadingCity?: string;

      /** 收货市编码 */
      unloadingCityNo?: string;

      /** 收货单位 */
      unloadingCompanyName?: string;

      /** 收货单位编码 */
      unloadingCompanyNo?: string;

      /** 收货人 */
      unloadingConsignor?: string;

      /** 收货人联系电话 */
      unloadingContacts?: string;

      /**  收货省 */
      unloadingProvince?: string;

      /** 收货省代码  */
      unloadingProvinceNo?: string;

      /** 收货区  */
      unloadingRegion?: string;

      /** 收货区代码 */
      unloadingRegionNo?: string;

      /** 体积单位 */
      volumeUnit?: string;

      /** 重量单位 */
      weightUnit?: string;
    }

    export class ShippingOrderVO {
      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** 货物型号 */
      goodsModel?: string;

      /** 货物名称 */
      goodsName?: string;

      /** id */
      id?: number;

      /** inputDate */
      inputDate?: string;

      /** inputMan */
      inputMan?: string;

      /** isDeleted */
      isDeleted?: string;

      /** 物流订单ID */
      omsRequestOrderId?: number;

      /** 数量 */
      quantity?: number;

      /** 数量单位 */
      quantityUnit?: string;

      /** 体积 */
      volume?: number;

      /** 体积单位 */
      volumeUnit?: string;

      /** 重量 */
      weight?: number;

      /** 重量单位 */
      weightUnit?: string;
    }

    export class TransportRequirementVO {
      /** detail */
      detail?: Array<string>;

      /** type */
      type?: string;

      /** typeName */
      typeName?: string;
    }

    export class TransportStatusVO {
      /** address */
      address?: string;

      /** afterDriverPhone */
      afterDriverPhone?: string;

      /** afterLicensePlate */
      afterLicensePlate?: string;

      /** city */
      city?: string;

      /** cityCode */
      cityCode?: string;

      /** createDate */
      createDate?: string;

      /** createMan */
      createMan?: string;

      /** lat */
      lat?: string;

      /** lng */
      lng?: string;

      /** orderStatus */
      orderStatus?: string;

      /** province */
      province?: string;

      /** provinceCode */
      provinceCode?: string;

      /** region */
      region?: string;

      /** regionCode */
      regionCode?: string;
    }

    export class UpdateEnableStatusParam {
      /** 代操作的承运商id列表 */
      carrierIds: Array<number>;

      /** 操作的状态 0启用 1禁用 */
      enableStatus: string;
    }

    export class UserGridQueryParam {
      /** canSort */
      canSort?: boolean;

      /** gridName */
      gridName?: string;

      /** isDeleted */
      isDeleted?: string;

      /** operatorId */
      operatorId?: string;

      /** pageSize */
      pageSize?: number;

      /** partyId */
      partyId?: string;

      /** pinned */
      pinned?: string;

      /** start */
      start?: number;

      /** version */
      version?: string;

      /** visibleFlag */
      visibleFlag?: boolean;
    }

    export class YesterdayDataDTO {
      /** 送达订单日环比 */
      arrivedOrderDayRate?: number;

      /** 实际送达的订单量 */
      arrivedOrderNum?: number;

      /** 送达订单周同比 */
      arrivedOrderWeekRate?: number;

      /** 总费用日环比 */
      costDayRate?: number;

      /** 总费用周同比 */
      costWeekRate?: number;

      /** 准点率日环比 */
      onTimeDayRate?: number;

      /** 送达准点率 */
      onTimeRate?: number;

      /** 准点率周同比 */
      onTimeWeekRate?: number;

      /** 订单量日环比 */
      orderDayRate?: number;

      /** 订单量 */
      orderNum?: number;

      /** 订单量周同比 */
      orderWeekRate?: number;

      /** 总费用 */
      totalCost?: number;

      /** 总体积(立方) */
      totalVolume?: number;

      /** 总重量(吨) */
      totalWeight?: number;

      /** 总体积日环比 */
      volumeDayRate?: number;

      /** 总体积周同比 */
      volumeWeekRate?: number;

      /** 总重量日环比 */
      weightDayRate?: number;

      /** 总重量周同比 */
      weightWeekRate?: number;
    }
  }
}

declare namespace API {
  export namespace api1 {
    /**
     * Address Controller
     */
    export namespace address {
      /**
       * create
       * /address/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressCreate,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace getDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace headDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace postDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace putDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace deleteDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace optionsDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /address/delete
       */
      export namespace patchDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * list
       * /address/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.AddressVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<defs.api1.AddressVO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace getQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace headQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace postQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace putQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace deleteQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace optionsQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * query
       * /address/query
       */
      export namespace patchQuery {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<defs.api1.AddressDO>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressQueryParam,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.AddressDO>>>;
      }

      /**
       * update
       * /address/update
       */
      export namespace postUpdate {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.AddressCreate,
        ): Promise<defs.api1.BaseRes<int>>;
      }
    }

    /**
     * 小程序中的车辆接口
     */
    export namespace appletCar {
      /**
       * 创建车辆
       * /appletCar/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = number;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarUpdateParam,
        ): Promise<number>;
      }

      /**
       * 删除车辆
       * /appletCar/delete
       */
      export namespace getDelete {
        export class Params {
          /** 车辆id */
          carId?: number;
        }

        export type Response = number;
        export const init: Response;
        export function request(params: Params): Promise<number>;
      }

      /**
       * 获取车辆的列表
       * /appletCar/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.Car;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarQueryParam,
        ): Promise<defs.api1.Car>;
      }

      /**
       * 修改车辆
       * /appletCar/update
       */
      export namespace putUpdate {
        export class Params {}

        export type Response = defs.api1.Car;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarUpdateParam,
        ): Promise<defs.api1.Car>;
      }
    }

    /**
     * 车辆相关接口
     */
    export namespace car {
      /**
       * 车辆绑定设备
       * /car/carBindDevice
       */
      export namespace postCarBindDevice {
        export class Params {}

        export type Response = boolean;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarBindDeviceParam,
        ): Promise<boolean>;
      }

      /**
       * 车辆解绑设备
       * /car/carUnBindDevice
       */
      export namespace postCarUnBindDevice {
        export class Params {}

        export type Response = boolean;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarBindDeviceParam,
        ): Promise<boolean>;
      }

      /**
       * 创建车辆
       * /car/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = number;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarUpdateParam,
        ): Promise<number>;
      }

      /**
       * 删除一个车辆
       * /car/delete
       */
      export namespace deleteDelete {
        export class Params {
          /** 车辆id */
          carId?: number;
        }

        export type Response = number;
        export const init: Response;
        export function request(params: Params): Promise<number>;
      }

      /**
       * 批量删除车辆
       * /car/deleteBatch
       */
      export namespace deleteDeleteBatch {
        export class Params {}

        export type Response = number;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DeleteByIdsParam,
        ): Promise<number>;
      }

      /**
       * 获取车辆的列表，可用下拉框接口
       * /car/getAllCarsByParam
       */
      export namespace postGetAllCarsByParam {
        export class Params {}

        export type Response = defs.api1.Car;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarQueryParam,
        ): Promise<defs.api1.Car>;
      }

      /**
       * 获取车辆的详情
       * /car/info
       */
      export namespace getInfo {
        export class Params {
          /** carId */
          '车辆id': number;
        }

        export type Response = defs.api1.CarDTO;
        export const init: Response;
        export function request(params: Params): Promise<defs.api1.CarDTO>;
      }

      /**
       * 获取最新位置--通过中交兴路
       * /car/latestLocation
       */
      export namespace getLatestLocation {
        export class Params {
          /** 车牌号 */
          plateNumber?: string;
        }

        export type Response = defs.api1.IotGpsVO;
        export const init: Response;
        export function request(params: Params): Promise<defs.api1.IotGpsVO>;
      }

      /**
       * 获取车辆的列表，带分页功能
       * /car/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.CarDTO;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarQueryParam,
        ): Promise<defs.api1.CarDTO>;
      }

      /**
       * 修改车辆
       * /car/update
       */
      export namespace putUpdate {
        export class Params {}

        export type Response = defs.api1.Car;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarUpdateParam,
        ): Promise<defs.api1.Car>;
      }
    }

    /**
     * 承运商相关接口
     */
    export namespace carrier {
      /**
       * 新增承运商接口
       * /carrierInfo/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = number;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarrierCreateParam,
        ): Promise<number>;
      }

      /**
       * 承运商删除接口
       * /carrierInfo/delete
       */
      export namespace postDelete {
        export class Params {}

        export type Response = number;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DeleteByIdsParam,
        ): Promise<number>;
      }

      /**
       * carrierInfoExport
       * /carrierInfo/export
       */
      export namespace postExport {
        export class Params {
          /** address */
          address?: string;
          /** carrierName */
          carrierName?: string;
          /** carrierNo */
          carrierNo?: string;
          /** city */
          city?: string;
          /** cityNo */
          cityNo?: string;
          /** companyInfoId */
          companyInfoId?: number;
          /** enableStatus */
          enableStatus?: string;
          /** identityNumber */
          identityNumber?: string;
          /** isDeleted */
          isDeleted?: string;
          /** keyWord */
          keyWord?: string;
          /** linkMan */
          linkMan?: string;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** phone */
          phone?: string;
          /** province */
          province?: string;
          /** provinceNo */
          provinceNo?: string;
          /** realName */
          realName?: string;
          /** region */
          region?: string;
          /** regionNo */
          regionNo?: string;
          /** start */
          start?: number;
          /** tel */
          tel?: string;
        }

        export type Response = object;
        export const init: Response;
        export function request(params: Params): Promise<object>;
      }

      /**
       * 获取承运商列表，可用于下拉框接口
       * /carrierInfo/getAllCarriers
       */
      export namespace postGetAllCarriers {
        export class Params {}

        export type Response = defs.api1.CarrierInfo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarrierQueryParam,
        ): Promise<defs.api1.CarrierInfo>;
      }

      /**
       * 查询承运商
       * /carrierInfo/getCarrier
       */
      export namespace postGetCarrier {
        export class Params {}

        export type Response = defs.api1.CarrierInfo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarrierQueryParam,
        ): Promise<defs.api1.CarrierInfo>;
      }

      /**
       * 获取承运商详情
       * /carrierInfo/getCarrierByNo
       */
      export namespace postGetCarrierByNo {
        export class Params {}

        export type Response = defs.api1.CarrierInfo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: string,
        ): Promise<defs.api1.CarrierInfo>;
      }

      /**
       * 获取承运商列表，带分页功能
       * /carrierInfo/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.CarrierInfo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarrierQueryParam,
        ): Promise<defs.api1.CarrierInfo>;
      }

      /**
       * 承运商修改接口
       * /carrierInfo/update
       */
      export namespace postUpdate {
        export class Params {}

        export type Response = defs.api1.CarrierInfo;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.CarrierUpdateParam,
        ): Promise<defs.api1.CarrierInfo>;
      }

      /**
       * 停用启用承运商
       * /carrierInfo/updateEnableStatus
       */
      export namespace postUpdateEnableStatus {
        export class Params {}

        export type Response = number;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.UpdateEnableStatusParam,
        ): Promise<number>;
      }
    }

    /**
     * Consigne Info Controller
     */
    export namespace consigneInfo {
      /**
       * create
       * /consigneInfo/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ConsigneInfoVO,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * delete
       * /consigneInfo/delete
       */
      export namespace postDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ConsigneInfoVO,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * parameterQueryExport
       * /consigneInfo/export
       */
      export namespace postExport {
        export class Params {}

        export type Response = object;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ConsigneInfoVO,
        ): Promise<object>;
      }

      /**
       * getConsigneInfo
       * /consigneInfo/getConsigneInfo
       */
      export namespace postGetConsigneInfo {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.ConsigneInfoDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ConsigneInfoVO,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.ConsigneInfoDO>>>;
      }

      /**
       * list
       * /consigneInfo/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.ConsigneInfoVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ConsigneInfoVO,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<defs.api1.ConsigneInfoVO>>>;
      }

      /**
       * modif
       * /consigneInfo/modif
       */
      export namespace postModif {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ConsigneInfoVO,
        ): Promise<defs.api1.BaseRes<int>>;
      }
    }

    /**
     * 设备管理
     */
    export namespace device {
      /**
        * 新增设备
新增设备
        * /device/create
        */
      export namespace postCreate {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DeviceParam,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
        * 设备列表
分页查询设备列表
        * /device/data
        */
      export namespace postData {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.DeviceDo>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DeviceParam,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<defs.api1.DeviceDo>>>;
      }

      /**
        * 删除设备
根据id删除设备
        * /device/delete
        */
      export namespace getDelete {
        export class Params {
          /** 设备ID */
          id: number;
        }

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
        * 设备详情
根据ID查询设备详情
        * /device/detail
        */
      export namespace postDetail {
        export class Params {
          /** 设备ID */
          id: number;
        }

        export type Response = defs.api1.BaseRes<defs.api1.DeviceDo>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.DeviceDo>>;
      }

      /**
        * 禁用设备
禁用设备
        * /device/disable
        */
      export namespace postDisable {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
        * 启用设备
启用设备
        * /device/enable
        */
      export namespace postEnable {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
        * 更新设备
更新设备
        * /device/update
        */
      export namespace postUpdate {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DeviceParam,
        ): Promise<defs.api1.BaseRes<int>>;
      }
    }

    /**
     * 数据字典接口
     */
    export namespace dictionary {
      /**
       * create
       * /dictionary/create
       */
      export namespace postCreate {
        export class Params {
          /** code */
          code?: string;
          /** createDate */
          createDate?: string;
          /** createMan */
          createMan?: string;
          /** description */
          description?: string;
          /** id */
          id?: number;
          /** inputDate */
          inputDate?: string;
          /** inputMan */
          inputMan?: string;
          /** isDeleted */
          isDeleted?: string;
          /** partyId */
          partyId?: number;
          /** realName */
          realName?: string;
          /** type */
          type?: string;
          /** typeName */
          typeName?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OmsDictionaryDO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OmsDictionaryDO>>;
      }

      /**
       * delete
       * /dictionary/delete
       */
      export namespace postDelete {
        export class Params {
          /** id */
          id?: number;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OmsDictionaryDO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OmsDictionaryDO>>;
      }

      /**
       * deleteType
       * /dictionary/deleteType
       */
      export namespace postDeleteType {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * getEvaluationDict
       * /dictionary/getEvaluationDict
       */
      export namespace getGetEvaluationDict {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<string>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<string>>>;
      }

      /**
       * list
       * /dictionary/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.OmsDictionaryDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DictionaryListParam,
        ): Promise<
          defs.api1.BaseRes<defs.api1.Page<defs.api1.OmsDictionaryDO>>
        >;
      }

      /**
       * 查询平台级别数据字典
       * /dictionary/listPlatformDataByType
       */
      export namespace getListPlatformDataByType {
        export class Params {
          /** PLATFORM_CAR_LENGTH_TYPE=车型;PLATFORM_CAR_TYPE=车长 */
          type: string;
        }

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * mergeList
       * /dictionary/mergeList
       */
      export namespace postMergeList {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.TransportRequirementVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DictionaryListParam,
        ): Promise<
          defs.api1.BaseRes<defs.api1.Page<defs.api1.TransportRequirementVO>>
        >;
      }

      /**
       * queryDict
       * /dictionary/queryDict
       */
      export namespace postQueryDict {
        export class Params {}

        export type Response = defs.api1.BaseRes<Array<string>>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DictionaryListParam,
        ): Promise<defs.api1.BaseRes<Array<string>>>;
      }

      /**
       * typeList
       * /dictionary/typeList
       */
      export namespace postTypeList {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.ObjectMap<string, string>>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DictionaryListParam,
        ): Promise<
          defs.api1.BaseRes<Array<defs.api1.ObjectMap<string, string>>>
        >;
      }

      /**
       * update
       * /dictionary/update
       */
      export namespace postUpdate {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.TransportRequirementVO,
        ): Promise<defs.api1.BaseRes<int>>;
      }
    }

    /**
     * File Controller
     */
    export namespace file {
      /**
       * delete
       * /file/delete
       */
      export namespace getDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * delete
       * /file/delete
       */
      export namespace headDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * delete
       * /file/delete
       */
      export namespace postDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * delete
       * /file/delete
       */
      export namespace putDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * delete
       * /file/delete
       */
      export namespace deleteDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * delete
       * /file/delete
       */
      export namespace optionsDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * delete
       * /file/delete
       */
      export namespace patchDelete {
        export class Params {
          /** fileName */
          fileName?: string;
        }

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * upload
       * /file/upload
       */
      export namespace postUpload {
        export class Params {
          /** file */
          file: File;
        }

        export type Response = defs.api1.BaseRes<defs.api1.JSONObject>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.JSONObject>>;
      }
    }

    /**
     * Goods Info Controller
     */
    export namespace goodsInfo {
      /**
       * create
       * /goodsInfo/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.GoodsInfoDO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.GoodsInfoQueryParam,
        ): Promise<defs.api1.BaseRes<defs.api1.GoodsInfoDO>>;
      }

      /**
       * delete
       * /goodsInfo/delete
       */
      export namespace postDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: ObjectMap<any, object>,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * parameterQueryExport
       * /goodsInfo/export
       */
      export namespace postExport {
        export class Params {
          /** goodsModelNo */
          goodsModelNo?: string;
          /** goodsName */
          goodsName?: string;
          /** goodsNo */
          goodsNo?: string;
          /** goodsPackage */
          goodsPackage?: string;
          /** goodsType */
          goodsType?: string;
          /** goodsUnit */
          goodsUnit?: string;
          /** id */
          id?: number;
          /** isDeleted */
          isDeleted?: string;
          /** keyWord */
          keyWord?: string;
          /** packingType */
          packingType?: string;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** realName */
          realName?: string;
          /** remark */
          remark?: string;
          /** start */
          start?: number;
        }

        export type Response = object;
        export const init: Response;
        export function request(params: Params): Promise<object>;
      }

      /**
       * list
       * /goodsInfo/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.GoodsInfoDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.GoodsInfoQueryParam,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<defs.api1.GoodsInfoDO>>>;
      }

      /**
       * update
       * /goodsInfo/update
       */
      export namespace postUpdate {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.GoodsInfoDO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.GoodsInfoQueryParam,
        ): Promise<defs.api1.BaseRes<defs.api1.GoodsInfoDO>>;
      }
    }

    /**
     * 首页接口
     */
    export namespace homepage {
      /**
       * downloadImage
       * /homepage/downloadImage
       */
      export namespace getDownloadImage {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 获取实时数据监控
       * /homepage/statisticsRealtimeData
       */
      export namespace getStatisticsRealtimeData {
        export class Params {}

        export type Response = defs.api1.RealtimeDataDTO;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.RealtimeDataDTO>;
      }

      /**
       * 获取昨日订单分析
       * /homepage/statisticsYesterdayData
       */
      export namespace getStatisticsYesterdayData {
        export class Params {}

        export type Response = defs.api1.YesterdayDataDTO;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.YesterdayDataDTO>;
      }
    }

    /**
     * 订单费用相关接口
     */
    export namespace orderCost {
      /**
       * 获取订单的费用明细
       * /orderCost/getOrderCost
       */
      export namespace getGetOrderCost {
        export class Params {
          /** clientOrderNo */
          clientOrderNo: string;
        }

        export type Response = defs.api1.OrderCostInfo;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.OrderCostInfo>;
      }

      /**
       * 获取企业下的费用项配置
       * /orderCost/listCostItem
       */
      export namespace getListCostItem {
        export class Params {}

        export type Response = defs.api1.CostItem;
        export const init: Response;
        export function request(params: Params): Promise<defs.api1.CostItem>;
      }

      /**
       * 自定义企业的费用项配置
       * /orderCost/updateCostItem
       */
      export namespace postUpdateCostItem {
        export class Params {}

        export type Response = defs.api1.CostItem;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: Array<defs.api1.CostItem>,
        ): Promise<defs.api1.CostItem>;
      }

      /**
       * 修改订单的费用
       * /orderCost/updateOrderCost
       */
      export namespace postUpdateOrderCost {
        export class Params {}

        export type Response = defs.api1.CostItem;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderCostInfo,
        ): Promise<defs.api1.CostItem>;
      }
    }

    /**
     * 订单设备绑定
     */
    export namespace orderDevices {
      /**
       * 业务单据与设备绑定
       * /orderDevices/bind
       */
      export namespace postBind {
        export class Params {}

        export type Response = defs.api1.BaseRes<boolean>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderBindParam,
        ): Promise<defs.api1.BaseRes<boolean>>;
      }

      /**
       * 业务对象与设备绑定
       * /orderDevices/bindTrack
       */
      export namespace postBindTrack {
        export class Params {
          /** remark */
          remark?: string;
          /** serialNo */
          serialNo?: string;
          /** trackName */
          trackName?: string;
        }

        export type Response = defs.api1.BaseRes<int>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<int>>;
      }

      /**
       * 查询设备是否被绑定 true 未绑定 false已绑定
       * /orderDevices/checkBound
       */
      export namespace getCheckBound {
        export class Params {
          /** serialNo */
          serialNo: string;
        }

        export type Response = defs.api1.BaseRes<boolean>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<boolean>>;
      }

      /**
       * 查询订单绑定记录
       * /orderDevices/query
       */
      export namespace postQuery {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.OrderDevicesVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<defs.api1.OrderDevicesVO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace getQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace headQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace postQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace putQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace deleteQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace optionsQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 查询对象绑定记录
       * /orderDevices/queryBind
       */
      export namespace patchQueryBind {
        export class Params {
          /** affiliatedCompany */
          affiliatedCompany?: string;
          /** bindingTimeEnd */
          bindingTimeEnd?: string;
          /** bindingTimeStart */
          bindingTimeStart?: string;
          /** clientOrderNo */
          clientOrderNo?: string;
          /** comyIds */
          comyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** omsDeviceId */
          omsDeviceId?: number;
          /** omsRequestOrderId */
          omsRequestOrderId?: number;
          /** pageSize */
          pageSize?: number;
          /** partyId */
          partyId?: number;
          /** requestOrderNo */
          requestOrderNo?: string;
          /** serialNo */
          serialNo?: string;
          /** start */
          start?: number;
          /** trackName */
          trackName?: string;
          /** type */
          type?: string;
          /** unBindingTimeEnd */
          unBindingTimeEnd?: string;
          /** unBindingTimeStart */
          unBindingTimeStart?: string;
        }

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesDO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesDO>>>;
      }

      /**
       * 业务单据与设备解绑
       * /orderDevices/unbind
       */
      export namespace postUnbind {
        export class Params {}

        export type Response = defs.api1.BaseRes<boolean>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderBindParam,
        ): Promise<defs.api1.BaseRes<boolean>>;
      }
    }

    /**
     * 订单设备定位信息
     */
    export namespace orderDevicesLocation {
      /**
       * 查询当前用户设备统计信息和设备列表
       * /orderDevicesLocation/devicesData
       */
      export namespace postDevicesData {
        export class Params {
          /** 绑定状态 */
          bindingStatus?: string;
          /** 所属企业 */
          companyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** 精确查询：1，模糊查询：0 */
          isExact?: number;
          /** pageSize */
          pageSize?: number;
          /** 会员id */
          partyId?: string;
          /** 查询的号码 */
          queryNo?: string;
          /** start */
          start?: number;
        }

        export type Response = defs.api1.BaseRes<defs.api1.DevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.DevicesInfoVO>>;
      }

      /**
       * 查询当前用户设备统计信息和设备信息
       * /orderDevicesLocation/devicesDetails
       */
      export namespace postDevicesDetails {
        export class Params {
          /** 绑定状态 */
          bindingStatus?: string;
          /** 所属企业 */
          companyIds?: Array<number>;
          /** isDeleted */
          isDeleted?: string;
          /** 精确查询：1，模糊查询：0 */
          isExact?: number;
          /** pageSize */
          pageSize?: number;
          /** 会员id */
          partyId?: string;
          /** 查询的号码 */
          queryNo?: string;
          /** start */
          start?: number;
        }

        export type Response = defs.api1.BaseRes<defs.api1.DevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.DevicesInfoVO>>;
      }

      /**
       * 设备定位接口
       * /orderDevicesLocation/devicesLocation
       */
      export namespace postDevicesLocation {
        export class Params {
          /** devicesNo */
          devicesNo?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 设备跟踪接口
       * /orderDevicesLocation/devicesTrack
       */
      export namespace postDevicesTrack {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.DevicesTrackRequest,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace getOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace headOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace postOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace putOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace deleteOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace optionsOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 订单跟踪接口
       * /orderDevicesLocation/orderTrack
       */
      export namespace patchOrderTrack {
        export class Params {
          /** endCreateDate */
          endCreateDate?: string;
          /** gpsType */
          gpsType?: string;
          /** orderNo */
          orderNo?: string;
          /** startCreateDate */
          startCreateDate?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 实时监控:查询当前用户所有的设备信息接口
       * /orderDevicesLocation/queryAllDevices
       */
      export namespace postQueryAllDevices {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          Array<defs.api1.OrderDevicesInfoVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<defs.api1.OrderDevicesInfoVO>>>;
      }

      /**
       * 设备号精确查询定位接口
       * /orderDevicesLocation/queryBySerialNo
       */
      export namespace postQueryBySerialNo {
        export class Params {
          /** serialNo */
          serialNo?: string;
        }

        export type Response = defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderDevicesInfoVO>>;
      }

      /**
       * 设备编号、单据号或已设置的跟踪对象名称自动模糊 查询
       * /orderDevicesLocation/queryFuzzyNo
       */
      export namespace getQueryFuzzyNo {
        export class Params {
          /** queryNo */
          queryNo?: string;
        }

        export type Response = defs.api1.BaseRes<Array<string>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<string>>>;
      }

      /**
       * 设备编号、单据号或已设置的跟踪对象名称自动模糊 查询
       * /orderDevicesLocation/queryFuzzyNo
       */
      export namespace postQueryFuzzyNo {
        export class Params {
          /** queryNo */
          queryNo?: string;
        }

        export type Response = defs.api1.BaseRes<Array<string>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<Array<string>>>;
      }
    }

    /**
     * 订单操作接口
     */
    export namespace requestOrder {
      /**
       * 订单批量操作,派单，提货，送达等
       * /requestOrder/batchOperation
       */
      export namespace postBatchOperation {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.BatchOperationParam,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 撤回订单
       * /requestOrder/cancel
       */
      export namespace postCancel {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 订单创建
       * /requestOrder/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderVO,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 订单列表
       * /requestOrder/data
       */
      export namespace postData {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.RequestOrderTotals>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<defs.api1.RequestOrderTotals>>;
      }

      /**
       * 删除
       * /requestOrder/delete
       */
      export namespace postDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 订单详情
       * /requestOrder/detail
       */
      export namespace postDetail {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.OrderVO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderVO>>;
      }

      /**
       * 订单导出
       * /requestOrder/getExportData
       */
      export namespace postGetExportData {
        export class Params {}

        export type Response = any;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<any>;
      }

      /**
       * 查看订单评价
       * /requestOrder/getOrderEvaluate
       */
      export namespace getGetOrderEvaluate {
        export class Params {
          /** clientOrderNo */
          clientOrderNo: string;
        }

        export type Response = defs.api1.OrderEvaluate;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.OrderEvaluate>;
      }

      /**
       * 主动获取订单位置信息
       * /requestOrder/getPosition
       */
      export namespace postGetPosition {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 订单导入
       * /requestOrder/importExcel
       */
      export namespace postImportExcel {
        export class Params {
          /** file */
          file?: File;
        }

        export type Response = any;
        export const init: Response;
        export function request(params: Params): Promise<any>;
      }

      /**
       * 订单修改
       * /requestOrder/modify
       */
      export namespace postModify {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderVO,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 订单评价
       * /requestOrder/orderEvaluate
       */
      export namespace postOrderEvaluate {
        export class Params {}

        export type Response = boolean;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderEvaluateParam,
        ): Promise<boolean>;
      }

      /**
       * 回单
       * /requestOrder/receipt
       */
      export namespace postReceipt {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.OrderReceiptVO,
        ): Promise<defs.api1.BaseRes<string>>;
      }

      /**
       * 发送收货码
       * /requestOrder/sendCode
       */
      export namespace postSendCode {
        export class Params {}

        export type Response = defs.api1.BaseRes<boolean>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.BatchOperationParam,
        ): Promise<defs.api1.BaseRes<boolean>>;
      }
    }

    /**
     * Shipping Person Controller
     */
    export namespace shippingPerson {
      /**
       * create
       * /shippingPerson/create
       */
      export namespace postCreate {
        export class Params {}

        export type Response = defs.api1.BaseRes<ObjectMap>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<ObjectMap>>;
      }

      /**
       * delete
       * /shippingPerson/delete
       */
      export namespace deleteDelete {
        export class Params {}

        export type Response = defs.api1.BaseRes<ObjectMap>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<ObjectMap>>;
      }

      /**
       * info
       * /shippingPerson/info
       */
      export namespace postInfo {
        export class Params {}

        export type Response = defs.api1.BaseRes<ObjectMap>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<ObjectMap>>;
      }

      /**
       * list
       * /shippingPerson/list
       */
      export namespace postList {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.Page<ObjectMap>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<ObjectMap>>>;
      }

      /**
       * update
       * /shippingPerson/update
       */
      export namespace putUpdate {
        export class Params {}

        export type Response = defs.api1.BaseRes<ObjectMap>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api1.BaseRes<ObjectMap>>;
      }
    }

    /**
     * 用户相关接口
     */
    export namespace userInfo {
      /**
       * getPartyName
       * /user/partyName
       */
      export namespace getPartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getPartyName
       * /user/partyName
       */
      export namespace headPartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getPartyName
       * /user/partyName
       */
      export namespace postPartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getPartyName
       * /user/partyName
       */
      export namespace putPartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getPartyName
       * /user/partyName
       */
      export namespace deletePartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getPartyName
       * /user/partyName
       */
      export namespace optionsPartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getPartyName
       * /user/partyName
       */
      export namespace patchPartyName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace getProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace headProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace postProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace putProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace deleteProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace optionsProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getProjectName
       * /user/projectName
       */
      export namespace patchProjectName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * 上报微信小程序的formId
       * /user/reportedWxFormId
       */
      export namespace postReportedWxFormId {
        export class Params {}

        export type Response = boolean;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: string,
        ): Promise<boolean>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace getUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace headUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace postUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace putUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace deleteUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace optionsUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }

      /**
       * getUserName
       * /user/userName
       */
      export namespace patchUserName {
        export class Params {}

        export type Response = string;
        export const init: Response;
        export function request(params: Params): Promise<string>;
      }
    }

    /**
     * 承运方小程序操作接口
     */
    export namespace wxCarrierApp {
      /**
       * 小程序订单列表
       * /wx/carrier/data
       */
      export namespace postData {
        export class Params {}

        export type Response = defs.api1.BaseRes<
          defs.api1.Page<defs.api1.RequestOrderVO>
        >;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<defs.api1.Page<defs.api1.RequestOrderVO>>>;
      }

      /**
       * 上报附件
       * /wx/carrier/reported
       */
      export namespace postReported {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ReportedVO,
        ): Promise<defs.api1.BaseRes<string>>;
      }
    }

    /**
     * 天涯跟单Controller
     */
    export namespace wxEyeTrack {
      /**
        * 天眼跟单小程序订单列表
执行中，近期签收，历史签收
        * /eye/track/data
        */
      export namespace postData {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.EyeTrackVO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<defs.api1.EyeTrackVO>>;
      }

      /**
        * 天眼跟单小程序订单详情
货物跟踪
        * /eye/track/detail
        */
      export namespace postDetail {
        export class Params {}

        export type Response = defs.api1.BaseRes<defs.api1.OrderVO>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.RequestOrderParam,
        ): Promise<defs.api1.BaseRes<defs.api1.OrderVO>>;
      }

      /**
       * 确认收货
       * /eye/track/receive
       */
      export namespace postReceive {
        export class Params {}

        export type Response = defs.api1.BaseRes<string>;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: defs.api1.ReportedVO,
        ): Promise<defs.api1.BaseRes<string>>;
      }
    }
  }
}
