type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace api1 {
    export class AddressCreate {
      /**
       * addressCreate
       * @type {Array<defs.api1.AddressQueryParam>}
       */
      addressCreate;

      /**
       * consigneId
       * @type {number}
       */
      consigneId;

      /**
       * consigneName
       * @type {string}
       */
      consigneName;
    }

    export class AddressDO {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * addressNo
       * @type {string}
       */
      addressNo;

      /**
       * areaCode
       * @type {string}
       */
      areaCode;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * cityNo
       * @type {string}
       */
      cityNo;

      /**
       * consigneId
       * @type {number}
       */
      consigneId;

      /**
       * consigneName
       * @type {string}
       */
      consigneName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDefault
       * @type {string}
       */
      isDefault;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * lat
       * @type {string}
       */
      lat;

      /**
       * linkMan
       * @type {string}
       */
      linkMan;

      /**
       * lon
       * @type {string}
       */
      lon;

      /**
       * omsAddressId
       * @type {number}
       */
      omsAddressId;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * provinceNo
       * @type {string}
       */
      provinceNo;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * regionNo
       * @type {string}
       */
      regionNo;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * tel
       * @type {string}
       */
      tel;
    }

    export class AddressQueryParam {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * addressNo
       * @type {string}
       */
      addressNo;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * cityNo
       * @type {string}
       */
      cityNo;

      /**
       * consigneId
       * @type {number}
       */
      consigneId;

      /**
       * consigneName
       * @type {string}
       */
      consigneName;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * isDefault
       * @type {string}
       */
      isDefault;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * keyWord
       * @type {string}
       */
      keyWord;

      /**
       * linkMan
       * @type {string}
       */
      linkMan;

      /**
       * omsAddressId
       * @type {number}
       */
      omsAddressId;

      /**
       * ordinarySearch
       * @type {string}
       */
      ordinarySearch;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * provinceNo
       * @type {string}
       */
      provinceNo;

      /**
       * realName
       * @type {string}
       */
      realName;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * regionNo
       * @type {string}
       */
      regionNo;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * tel
       * @type {string}
       */
      tel;
    }

    export class AddressVO {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * addressNo
       * @type {string}
       */
      addressNo;

      /**
       * areaCode
       * @type {string}
       */
      areaCode;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * cityNo
       * @type {string}
       */
      cityNo;

      /**
       * consigneId
       * @type {number}
       */
      consigneId;

      /**
       * consigneName
       * @type {string}
       */
      consigneName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDefault
       * @type {string}
       */
      isDefault;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * lat
       * @type {string}
       */
      lat;

      /**
       * linkMan
       * @type {string}
       */
      linkMan;

      /**
       * lon
       * @type {string}
       */
      lon;

      /**
       * omsAddressId
       * @type {number}
       */
      omsAddressId;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * provinceNo
       * @type {string}
       */
      provinceNo;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * regionNo
       * @type {string}
       */
      regionNo;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * statementUnit
       * @type {string}
       */
      statementUnit;

      /**
       * tel
       * @type {string}
       */
      tel;
    }

    export class BaseRes<T0 = any> {
      /**
       * code
       * @type {number}
       */
      code;

      /**
       * data
       * @type {T0}
       */
      data;

      /**
       * message
       * @type {string}
       */
      message;
    }

    export class BatchOperationParam {
      /**
       * 地址
       * @type {string}
       */
      address;

      /**
       * 车辆id
       * @type {number}
       */
      carId;

      /**
       * 承运商id
       * @type {number}
       */
      carrierInfoId;

      /**
       * 承运商名称
       * @type {string}
       */
      carrierName;

      /**
       * 市
       * @type {string}
       */
      city;

      /**
       * 司机名称
       * @type {string}
       */
      driverName;

      /**
       * 司机联系方式
       * @type {string}
       */
      driverPhone;

      /**
       * 订单id集合
       * @type {Array<number>}
       */
      ids;

      /**
       * 纬
       * @type {string}
       */
      loclat;

      /**
       * 经
       * @type {string}
       */
      loclng;

      /**
       * 操作：派单，提货，送达，发运
       * @type {string}
       */
      operationType;

      /**
       * 车辆号
       * @type {string}
       */
      plateNumber;

      /**
       * 省
       * @type {string}
       */
      province;

      /**
       * 区
       * @type {string}
       */
      region;

      /**
       * 时间
       * @type {string}
       */
      time;
    }

    export class Car {
      /**
       *  额定载重
       * @type {number}
       */
      capacity;

      /**
       *  主键ID
       * @type {number}
       */
      carId;

      /**
       *  车长
       * @type {number}
       */
      carLength;

      /**
       *  车辆编号
       * @type {string}
       */
      carNo;

      /**
       *  车辆类型
       * @type {string}
       */
      carType;

      /**
       *  承运商表CarrierInfo的ID,承运商车辆会存在
       * @type {number}
       */
      carrierInfoId;

      /**
       *  公司id
       * @type {number}
       */
      companyInfoId;

      /**
       *  企业名称
       * @type {string}
       */
      companyName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  绑定设备号
       * @type {string}
       */
      deviceNo;

      /**
       *  司机姓名
       * @type {string}
       */
      driverName;

      /**
       *  司机手机号
       * @type {string}
       */
      driverPhone;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  机动车辆类型
       * @type {string}
       */
      motorVehicleType;

      /**
       *  组织名称
       * @type {string}
       */
      organizationName;

      /**
       *  会员ID
       * @type {number}
       */
      partyId;

      /**
       *  车牌号
       * @type {string}
       */
      plateNumber;

      /**
       *  备注
       * @type {string}
       */
      remark;

      /**
       *  记录更新时间
       * @type {string}
       */
      stampDate;

      /**
       *  额定体积
       * @type {number}
       */
      volume;
    }

    export class CarBindDeviceParam {
      /**
       *  车辆id
       * @type {number}
       */
      carId;

      /**
       *  绑定设备号
       * @type {string}
       */
      deviceNo;

      /**
       * 设备类型 小黑卡，中交兴路
       * @type {string}
       */
      deviceType;

      /**
       *  车牌号
       * @type {string}
       */
      plateNumber;
    }

    export class CarDTO {
      /**
       *  额定载重
       * @type {number}
       */
      capacity;

      /**
       *  主键ID
       * @type {number}
       */
      carId;

      /**
       *  车长
       * @type {number}
       */
      carLength;

      /**
       *  车辆编号
       * @type {string}
       */
      carNo;

      /**
       *  车辆类型
       * @type {string}
       */
      carType;

      /**
       *  承运商表CarrierInfo的ID,承运商车辆会存在
       * @type {number}
       */
      carrierInfoId;

      /**
       *  承运商名称
       * @type {string}
       */
      carrierName;

      /**
       *  公司id
       * @type {number}
       */
      companyInfoId;

      /**
       *  企业名称
       * @type {string}
       */
      companyName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  绑定设备号
       * @type {string}
       */
      deviceNo;

      /**
       *  司机姓名
       * @type {string}
       */
      driverName;

      /**
       *  司机手机号
       * @type {string}
       */
      driverPhone;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * 地址信息
       * @type {defs.api1.IotGpsVO}
       */
      iotGpsVO;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  机动车辆类型
       * @type {string}
       */
      motorVehicleType;

      /**
       *  组织名称
       * @type {string}
       */
      organizationName;

      /**
       *  会员ID
       * @type {number}
       */
      partyId;

      /**
       *  车牌号
       * @type {string}
       */
      plateNumber;

      /**
       *  备注
       * @type {string}
       */
      remark;

      /**
       *  记录更新时间
       * @type {string}
       */
      stampDate;

      /**
       *  额定体积
       * @type {number}
       */
      volume;
    }

    export class CarQueryParam {
      /**
       *  车辆类型
       * @type {string}
       */
      carType;

      /**
       *  承运商表CarrierInfo的ID,承运商车辆会存在
       * @type {number}
       */
      carrierInfoId;

      /**
       * companyInfoId
       * @type {number}
       */
      companyInfoId;

      /**
       * driverPhone
       * @type {string}
       */
      driverPhone;

      /**
       * enableStatus
       * @type {string}
       */
      enableStatus;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 关键字：车牌，司机姓名，手机号的模糊查询
       * @type {string}
       */
      keyWord;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * plateNumber
       * @type {string}
       */
      plateNumber;

      /**
       * realName
       * @type {string}
       */
      realName;

      /**
       * start
       * @type {number}
       */
      start;
    }

    export class CarUpdateParam {
      /**
       *  额定载重
       * @type {number}
       */
      capacity;

      /**
       *  车辆Id
       * @type {number}
       */
      carId;

      /**
       *  车长
       * @type {number}
       */
      carLength;

      /**
       *  车辆类型
       * @type {string}
       */
      carType;

      /**
       *  承运商表CarrierInfo的ID,承运商车辆会存在
       * @type {number}
       */
      carrierInfoId;

      /**
       *  承运商名称
       * @type {string}
       */
      carrierName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  绑定设备号
       * @type {string}
       */
      deviceNo;

      /**
       *  司机姓名
       * @type {string}
       */
      driverName;

      /**
       *  司机手机号
       * @type {string}
       */
      driverPhone;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  机动车辆类型
       * @type {string}
       */
      motorVehicleType;

      /**
       *  会员ID
       * @type {number}
       */
      partyId;

      /**
       *  车牌号
       * @type {string}
       */
      plateNumber;

      /**
       *  备注
       * @type {string}
       */
      remark;

      /**
       *  额定体积
       * @type {number}
       */
      volume;
    }

    export class CarrierCreateParam {
      /**
       *  详细地址
       * @type {string}
       */
      address;

      /**
       *  承运商名称
       * @type {string}
       */
      carrierName;

      /**
       *  市
       * @type {string}
       */
      city;

      /**
       *  市编号
       * @type {string}
       */
      cityNo;

      /**
       *  公司id
       * @type {number}
       */
      companyInfoId;

      /**
       *  企业名称
       * @type {string}
       */
      companyName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  邮箱
       * @type {string}
       */
      email;

      /**
       *  启用状态
       * @type {string}
       */
      enableStatus;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       *  身份证号码
       * @type {string}
       */
      identityNumber;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       *  发票抬头
       * @type {string}
       */
      invoiceTitle;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  联系人
       * @type {string}
       */
      linkMan;

      /**
       *  组织名称
       * @type {string}
       */
      organizationName;

      /**
       *  会员ID
       * @type {number}
       */
      partyId;

      /**
       *  承运商电话
       * @type {string}
       */
      phone;

      /**
       *  省
       * @type {string}
       */
      province;

      /**
       *  省编号
       * @type {string}
       */
      provinceNo;

      /**
       *  区
       * @type {string}
       */
      region;

      /**
       *  区编号
       * @type {string}
       */
      regionNo;

      /**
       *  备注信息
       * @type {string}
       */
      remark;

      /**
       *  税号
       * @type {string}
       */
      taxNo;

      /**
       *  税率
       * @type {number}
       */
      taxRate;

      /**
       *  联系人电话
       * @type {string}
       */
      tel;
    }

    export class CarrierInfo {
      /**
       *  详细地址
       * @type {string}
       */
      address;

      /**
       *  ID
       * @type {number}
       */
      carrierInfoId;

      /**
       *  承运商名称
       * @type {string}
       */
      carrierName;

      /**
       *  承运商编码
       * @type {string}
       */
      carrierNo;

      /**
       *  市
       * @type {string}
       */
      city;

      /**
       *  市编号
       * @type {string}
       */
      cityNo;

      /**
       *  公司id
       * @type {number}
       */
      companyInfoId;

      /**
       *  企业名称
       * @type {string}
       */
      companyName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  邮箱
       * @type {string}
       */
      email;

      /**
       *  启用状态
       * @type {string}
       */
      enableStatus;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       *  身份证号码
       * @type {string}
       */
      identityNumber;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       *  发票抬头
       * @type {string}
       */
      invoiceTitle;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  联系人
       * @type {string}
       */
      linkMan;

      /**
       *  组织名称
       * @type {string}
       */
      organizationName;

      /**
       *  会员ID
       * @type {number}
       */
      partyId;

      /**
       *  承运商电话
       * @type {string}
       */
      phone;

      /**
       *  省
       * @type {string}
       */
      province;

      /**
       *  省编号
       * @type {string}
       */
      provinceNo;

      /**
       *  区
       * @type {string}
       */
      region;

      /**
       *  区编号
       * @type {string}
       */
      regionNo;

      /**
       *  备注信息
       * @type {string}
       */
      remark;

      /**
       * stampDate
       * @type {string}
       */
      stampDate;

      /**
       *  税号
       * @type {string}
       */
      taxNo;

      /**
       *  税率
       * @type {number}
       */
      taxRate;

      /**
       *  联系人电话
       * @type {string}
       */
      tel;
    }

    export class CarrierQueryParam {
      /**
       * 详细地址
       * @type {string}
       */
      address;

      /**
       * 承运商名称
       * @type {string}
       */
      carrierName;

      /**
       * carrierNo
       * @type {string}
       */
      carrierNo;

      /**
       * 市
       * @type {string}
       */
      city;

      /**
       * 市编号
       * @type {string}
       */
      cityNo;

      /**
       * companyInfoId
       * @type {number}
       */
      companyInfoId;

      /**
       * enableStatus
       * @type {string}
       */
      enableStatus;

      /**
       * 身份证号码
       * @type {string}
       */
      identityNumber;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 关键字
       * @type {string}
       */
      keyWord;

      /**
       * 联系人
       * @type {string}
       */
      linkMan;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * 承运商电话
       * @type {string}
       */
      phone;

      /**
       * 省
       * @type {string}
       */
      province;

      /**
       * 省编号
       * @type {string}
       */
      provinceNo;

      /**
       * realName
       * @type {string}
       */
      realName;

      /**
       * 区
       * @type {string}
       */
      region;

      /**
       * 区编号
       * @type {string}
       */
      regionNo;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * 联系人电话
       * @type {string}
       */
      tel;
    }

    export class CarrierUpdateParam {
      /**
       *  详细地址
       * @type {string}
       */
      address;

      /**
       *  承运商名称
       * @type {string}
       */
      carrierName;

      /**
       *  市
       * @type {string}
       */
      city;

      /**
       *  市编号
       * @type {string}
       */
      cityNo;

      /**
       *  公司id
       * @type {number}
       */
      companyInfoId;

      /**
       *  企业名称
       * @type {string}
       */
      companyName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  邮箱
       * @type {string}
       */
      email;

      /**
       *  启用状态
       * @type {string}
       */
      enableStatus;

      /**
       *  承运商名称
       * @type {number}
       */
      id;

      /**
       *  身份证号码
       * @type {string}
       */
      identityNumber;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       *  发票抬头
       * @type {string}
       */
      invoiceTitle;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  联系人
       * @type {string}
       */
      linkMan;

      /**
       *  组织名称
       * @type {string}
       */
      organizationName;

      /**
       *  会员ID
       * @type {number}
       */
      partyId;

      /**
       *  承运商电话
       * @type {string}
       */
      phone;

      /**
       *  省
       * @type {string}
       */
      province;

      /**
       *  省编号
       * @type {string}
       */
      provinceNo;

      /**
       *  区
       * @type {string}
       */
      region;

      /**
       *  区编号
       * @type {string}
       */
      regionNo;

      /**
       *  备注信息
       * @type {string}
       */
      remark;

      /**
       *  税号
       * @type {string}
       */
      taxNo;

      /**
       *  税率
       * @type {number}
       */
      taxRate;

      /**
       *  联系人电话
       * @type {string}
       */
      tel;
    }

    export class ConsigneInfoDO {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * cityNo
       * @type {string}
       */
      cityNo;

      /**
       * consigneNo
       * @type {string}
       */
      consigneNo;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * invoiceTitle
       * @type {string}
       */
      invoiceTitle;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * linkMan
       * @type {string}
       */
      linkMan;

      /**
       * name
       * @type {string}
       */
      name;

      /**
       * omsConsigneInfoId
       * @type {number}
       */
      omsConsigneInfoId;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * provinceNo
       * @type {string}
       */
      provinceNo;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * regionNo
       * @type {string}
       */
      regionNo;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * statementUnit
       * @type {string}
       */
      statementUnit;

      /**
       * taxNo
       * @type {string}
       */
      taxNo;

      /**
       * tel
       * @type {string}
       */
      tel;

      /**
       * type
       * @type {string}
       */
      type;
    }

    export class ConsigneInfoVO {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * cityNo
       * @type {string}
       */
      cityNo;

      /**
       * consigneInfoIds
       * @type {Array<number>}
       */
      consigneInfoIds;

      /**
       * consigneNo
       * @type {string}
       */
      consigneNo;

      /**
       * inRegion
       * @type {string}
       */
      inRegion;

      /**
       * invoiceTitle
       * @type {string}
       */
      invoiceTitle;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * keyWord
       * @type {string}
       */
      keyWord;

      /**
       * linkMan
       * @type {string}
       */
      linkMan;

      /**
       * name
       * @type {string}
       */
      name;

      /**
       * omsConsigneInfoId
       * @type {number}
       */
      omsConsigneInfoId;

      /**
       * ordinarySearch
       * @type {string}
       */
      ordinarySearch;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * provinceNo
       * @type {string}
       */
      provinceNo;

      /**
       * realName
       * @type {string}
       */
      realName;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * regionNo
       * @type {string}
       */
      regionNo;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * serialNum
       * @type {number}
       */
      serialNum;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * statementUnit
       * @type {string}
       */
      statementUnit;

      /**
       * taxNo
       * @type {string}
       */
      taxNo;

      /**
       * tel
       * @type {string}
       */
      tel;

      /**
       * type
       * @type {string}
       */
      type;

      /**
       * typeList
       * @type {Array<string>}
       */
      typeList;
    }

    export class CostItem {
      /**
       *  签约企业IloopContractedCompany表的ID
       * @type {number}
       */
      companyId;

      /**
       *  主键ID
       * @type {number}
       */
      costItemId;

      /**
       *  费用项的顺序索引
       * @type {number}
       */
      costItemIndex;

      /**
       *  费用项说明
       * @type {string}
       */
      costItemInfo;

      /**
       *  费用项名称
       * @type {string}
       */
      costItemName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       *  启用状态: 0 启用；1 停用
       * @type {string}
       */
      enableStatus;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  费用项名称 + 增加；- 扣减
       * @type {string}
       */
      operationType;

      /**
       *  记录更新时间
       * @type {string}
       */
      stampDate;
    }

    export class DeleteByIdsParam {
      /**
       * id列表
       * @type {Array<number>}
       */
      id;
    }

    export class DeviceDo {
      /**
       * 所属企业
       * @type {string}
       */
      affiliatedCompany;

      /**
       * 所属企业id
       * @type {number}
       */
      affiliatedCompanyId;

      /**
       * 所属运营商
       * @type {string}
       */
      affiliatedOperator;

      /**
       * 所属运营商id
       * @type {number}
       */
      affiliatedOperatorId;

      /**
       * 绑定状态 (0绑定 1未绑定)
       * @type {string}
       */
      bindingStatus;

      /**
       * 业务单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * 设备编码(预留字段)
       * @type {string}
       */
      deviceCode;

      /**
       * 设备名称
       * @type {string}
       */
      deviceName;

      /**
       * 设备状态(0启用 1未启用 2停用)
       * @type {string}
       */
      deviceStatus;

      /**
       * 设备类型
       * @type {string}
       */
      deviceType;

      /**
       * iccid(卡号)
       * @type {string}
       */
      iccid;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 在线状态 (0在线 1离线)
       * @type {string}
       */
      onlineStatus;

      /**
       * 会员ID
       * @type {number}
       */
      partyId;

      /**
       * 最近绑定时间
       * @type {string}
       */
      recentlyBoundTime;

      /**
       * 最近上报时间
       * @type {string}
       */
      recentlyReportedTime;

      /**
       * 发展人
       * @type {string}
       */
      referencePerson;

      /**
       * 设备序列号
       * @type {string}
       */
      serialNo;

      /**
       * 软件版本号
       * @type {string}
       */
      softwareVersionNum;

      /**
       * 跟踪对象名称
       * @type {string}
       */
      trackName;
    }

    export class DeviceParam {
      /**
       * 签约企业(新增或修改设备时,该参数必传)
       * @type {string}
       */
      affiliatedCompany;

      /**
       * 所属企业ID
       * @type {number}
       */
      affiliatedCompanyId;

      /**
       * affiliatedCompanyIds
       * @type {Array<number>}
       */
      affiliatedCompanyIds;

      /**
       * 运营组织(新增或修改设备时,该参数必传)
       * @type {string}
       */
      affiliatedOperator;

      /**
       * 所属运营商ID
       * @type {number}
       */
      affiliatedOperatorId;

      /**
       * 截止创建日期
       * @type {string}
       */
      createDateEnd;

      /**
       * 起始创建日期
       * @type {string}
       */
      createDateStart;

      /**
       * 设备编码(预留字段)
       * @type {string}
       */
      deviceCode;

      /**
       * 设备名称
       * @type {string}
       */
      deviceName;

      /**
       * 设备状态(0启用 1未启用 2停用)
       * @type {string}
       */
      deviceStatus;

      /**
       * 设备类型
       * @type {string}
       */
      deviceType;

      /**
       * 卡号
       * @type {string}
       */
      iccid;

      /**
       * 设备id(修改或删除时该参数必传)
       * @type {number}
       */
      id;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 在线状态 (0在线 1离线)
       * @type {string}
       */
      onlineStatus;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * 发展人
       * @type {string}
       */
      referencePerson;

      /**
       * 设备序列号(新增或修改设备时,该参数必传)
       * @type {string}
       */
      serialNo;

      /**
       * 来源    0 运营pc端调用  1货主pc端调用
       * @type {string}
       */
      source;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * 跟踪对象名称
       * @type {string}
       */
      trackName;
    }

    export class DevicesInfoVO {
      /**
       * 绑定设备总数
       * @type {number}
       */
      bindingTotal;

      /**
       * 离线设备总数
       * @type {number}
       */
      lineTotal;

      /**
       * 设备列表
       * @type {defs.api1.Page<defs.api1.OrderDevicesInfoVO>}
       */
      page;

      /**
       * 待回收设备总数
       * @type {number}
       */
      recycleTotal;

      /**
       * 全部设备总数
       * @type {number}
       */
      total;

      /**
       * 未绑定设备总数
       * @type {number}
       */
      unBindingTotal;
    }

    export class DevicesTrackRequest {
      /**
       * devicesNo
       * @type {string}
       */
      devicesNo;

      /**
       * endCreateDate
       * @type {string}
       */
      endCreateDate;

      /**
       * startCreateDate
       * @type {string}
       */
      startCreateDate;
    }

    export class DictionaryListParam {
      /**
       * clientOrderNo
       * @type {string}
       */
      clientOrderNo;

      /**
       * description
       * @type {string}
       */
      description;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * realName
       * @type {string}
       */
      realName;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * type
       * @type {string}
       */
      type;

      /**
       * typeName
       * @type {string}
       */
      typeName;
    }

    export class EyeTrackVO {
      /**
       * 天眼跟单列表
       * @type {defs.api1.Page<defs.api1.RequestOrderVO>}
       */
      page;

      /**
       * 历史签收总数
       * @type {number}
       */
      pastCount;

      /**
       * 近期签收总数
       * @type {number}
       */
      recentCount;

      /**
       * 执行中总数
       * @type {number}
       */
      runningCount;
    }

    export class GoodsInfoDO {
      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * goodsModelNo
       * @type {string}
       */
      goodsModelNo;

      /**
       * goodsName
       * @type {string}
       */
      goodsName;

      /**
       * goodsNo
       * @type {string}
       */
      goodsNo;

      /**
       * goodsPackage
       * @type {string}
       */
      goodsPackage;

      /**
       * goodsType
       * @type {string}
       */
      goodsType;

      /**
       * goodsUnit
       * @type {string}
       */
      goodsUnit;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * packingType
       * @type {string}
       */
      packingType;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * remark
       * @type {string}
       */
      remark;
    }

    export class GoodsInfoQueryParam {
      /**
       * goodsModelNo
       * @type {string}
       */
      goodsModelNo;

      /**
       * goodsName
       * @type {string}
       */
      goodsName;

      /**
       * goodsNo
       * @type {string}
       */
      goodsNo;

      /**
       * goodsPackage
       * @type {string}
       */
      goodsPackage;

      /**
       * goodsType
       * @type {string}
       */
      goodsType;

      /**
       * goodsUnit
       * @type {string}
       */
      goodsUnit;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * keyWord
       * @type {string}
       */
      keyWord;

      /**
       * packingType
       * @type {string}
       */
      packingType;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * realName
       * @type {string}
       */
      realName;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * start
       * @type {number}
       */
      start;
    }

    export class IotGpsVO {
      /**
       * 详细地址
       * @type {string}
       */
      address;

      /**
       * 中交兴路id
       * @type {number}
       */
      carLocationId;

      /**
       * 承运商名称
       * @type {string}
       */
      carrierName;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * 上报人
       * @type {string}
       */
      createMan;

      /**
       * 数据来源
       * @type {string}
       */
      dataSource;

      /**
       * deviceid
       * @type {string}
       */
      deviceid;

      /**
       * 司机手机
       * @type {string}
       */
      driverPhone;

      /**
       * isout
       * @type {string}
       */
      isout;

      /**
       * loclat
       * @type {string}
       */
      loclat;

      /**
       * loclng
       * @type {string}
       */
      loclng;

      /**
       * 物流状态日志
       * @type {string}
       */
      logisticsStatus;

      /**
       * omsOrderOperateRecordId
       * @type {number}
       */
      omsOrderOperateRecordId;

      /**
       * 订单状态
       * @type {string}
       */
      orderStatus;

      /**
       * 车辆号
       * @type {string}
       */
      plateNumber;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * 设备号
       * @type {string}
       */
      serialNo;

      /**
       * 显示时间
       * @type {string}
       */
      showTime;

      /**
       * time
       * @type {string}
       */
      time;
    }

    export class JSONObject {}

    export class Map<T0 = any, T1 = any> {}

    export class OmsDictionaryDO {
      /**
       * code
       * @type {string}
       */
      code;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * description
       * @type {string}
       */
      description;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * partyId
       * @type {number}
       */
      partyId;

      /**
       * type
       * @type {string}
       */
      type;

      /**
       * typeName
       * @type {string}
       */
      typeName;
    }

    export class OrderBindParam {
      /**
       * 业务单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * 设备序列号
       * @type {string}
       */
      serialNo;

      /**
       * 绑定对象
       * @type {string}
       */
      trackName;

      /**
       * 解绑原因
       * @type {string}
       */
      untieReason;
    }

    export class OrderCostDTO {
      /**
       * clientOrderNo
       * @type {string}
       */
      clientOrderNo;

      /**
       * 费用
       * @type {number}
       */
      cost;

      /**
       * 费用项id
       * @type {number}
       */
      costItemId;

      /**
       * 费用项名称
       * @type {string}
       */
      costItemName;

      /**
       * operationType
       * @type {string}
       */
      operationType;
    }

    export class OrderCostInfo {
      /**
       * 订单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * 费用列表
       * @type {Array<defs.api1.OrderCostDTO>}
       */
      orderCosts;

      /**
       * 费用总计
       * @type {number}
       */
      totalCost;
    }

    export class OrderDevicesDO {
      /**
       * 绑定时间
       * @type {string}
       */
      bindingTime;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 设备id
       * @type {number}
       */
      omsDeviceId;

      /**
       * 订单id
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 备注
       * @type {string}
       */
      remark;

      /**
       * 跟踪对象名称
       * @type {string}
       */
      trackName;

      /**
       * 类型 0=其他，1=车辆，2=订单
       * @type {string}
       */
      type;

      /**
       * 解绑时间
       * @type {string}
       */
      unBindingTime;

      /**
       * 解绑原因
       * @type {string}
       */
      untieReason;
    }

    export class OrderDevicesInfoVO {
      /**
       * 当前与订单绑定的设备绑定状态:BindingStatus：[绑定，未绑定，待回收，绑定离线，未绑定离线 ]
       * @type {string}
       */
      bindingStatus;

      /**
       * bindingTime
       * @type {string}
       */
      bindingTime;

      /**
       * 业务单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * 订单结束时间
       * @type {string}
       */
      endCreateDate;

      /**
       * 当前设备所有的位置信息
       * @type {Array<defs.api1.IotGpsVO>}
       */
      gpsData;

      /**
       * 当前设备最后位置信息，纬度
       * @type {string}
       */
      loclat;

      /**
       * 当前设备最后位置信息，经度
       * @type {string}
       */
      loclng;

      /**
       * 订单id
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 当前订单节点信息
       * @type {Array<defs.api1.OrderOperateRecordChangeVO>}
       */
      orderOperateRecord;

      /**
       * 跟踪对象备注
       * @type {string}
       */
      remark;

      /**
       * 当前与订单绑定的设备序列号
       * @type {string}
       */
      serialNo;

      /**
       * 发货人详细地址
       * @type {string}
       */
      shipmentAddress;

      /**
       * 发货市
       * @type {string}
       */
      shipmentCity;

      /**
       * 发货省
       * @type {string}
       */
      shipmentProvince;

      /**
       * 发货区
       * @type {string}
       */
      shipmentRegion;

      /**
       * 当前设备最后位置信息:显示时间
       * @type {string}
       */
      showTime;

      /**
       * 订单开始时间
       * @type {string}
       */
      startCreateDate;

      /**
       * 订单状态
       * @type {string}
       */
      status;

      /**
       * 上报时间
       * @type {string}
       */
      time;

      /**
       * 跟踪对象名称
       * @type {string}
       */
      trackName;

      /**
       * 上报节点信息
       * @type {Array<defs.api1.IotGpsVO>}
       */
      transportList;

      /**
       * unBindingTime
       * @type {string}
       */
      unBindingTime;

      /**
       * 收货人详细地址
       * @type {string}
       */
      unloadingAddress;

      /**
       * 收货市
       * @type {string}
       */
      unloadingCity;

      /**
       * 收货省
       * @type {string}
       */
      unloadingProvince;

      /**
       * 收货区
       * @type {string}
       */
      unloadingRegion;
    }

    export class OrderDevicesVO {
      /**
       * 所属企业
       * @type {string}
       */
      affiliatedCompany;

      /**
       * 所属运营商
       * @type {string}
       */
      affiliatedOperator;

      /**
       * 绑定人
       * @type {string}
       */
      bindingMan;

      /**
       * 绑定状态 (0绑定 1未绑定)
       * @type {string}
       */
      bindingStatus;

      /**
       * 绑定时间
       * @type {string}
       */
      bindingTime;

      /**
       * 业务单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * 设备编码(预留字段)
       * @type {string}
       */
      deviceCode;

      /**
       * 设备状态(0启用 1未启用 2停用)
       * @type {string}
       */
      deviceStatus;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 设备id
       * @type {number}
       */
      omsDeviceId;

      /**
       * 订单id
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 在线状态 (0在线 1离线)
       * @type {string}
       */
      onlineStatus;

      /**
       * 最近绑定时间
       * @type {string}
       */
      recentlyBoundTime;

      /**
       * 最近上报时间
       * @type {string}
       */
      recentlyReportedTime;

      /**
       * 发展人
       * @type {string}
       */
      referencePerson;

      /**
       * 备注
       * @type {string}
       */
      remark;

      /**
       * 物流订单号
       * @type {string}
       */
      requestOrderNo;

      /**
       * 设备序列号
       * @type {string}
       */
      serialNo;

      /**
       * 跟踪对象名称
       * @type {string}
       */
      trackName;

      /**
       * 类型 0=其他，1=车辆，2=订单
       * @type {string}
       */
      type;

      /**
       * 解绑人
       * @type {string}
       */
      unBindingMan;

      /**
       * 解绑时间
       * @type {string}
       */
      unBindingTime;

      /**
       * 解绑原因
       * @type {string}
       */
      untieReason;
    }

    export class OrderEvaluate {
      /**
       *  订单表的单号
       * @type {string}
       */
      clientOrderNo;

      /**
       *  评价的内容
       * @type {string}
       */
      content;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       *  手机
       * @type {string}
       */
      mobile;

      /**
       *  订单表OmsRequestOrder的ID
       * @type {number}
       */
      omsRequestOrderId;

      /**
       *  主键ID
       * @type {number}
       */
      orderEvaluateId;

      /**
       *  评价的分数
       * @type {number}
       */
      score;

      /**
       *  记录更新时间
       * @type {string}
       */
      stampDate;

      /**
       *  用户表Id
       * @type {number}
       */
      userId;
    }

    export class OrderEvaluateParam {
      /**
       * 订单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * 评价内容,多个用逗号隔开(如AAA,BBB)
       * @type {string}
       */
      content;

      /**
       * 订单id
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 评价的分数
       * @type {number}
       */
      score;
    }

    export class OrderOperateRecordChangeVO {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * clientOrderNo
       * @type {string}
       */
      clientOrderNo;

      /**
       * lat
       * @type {string}
       */
      lat;

      /**
       * lng
       * @type {string}
       */
      lng;

      /**
       * logisticsStatus
       * @type {string}
       */
      logisticsStatus;

      /**
       * omsRequestOrderNo
       * @type {string}
       */
      omsRequestOrderNo;

      /**
       * plateNumber
       * @type {string}
       */
      plateNumber;

      /**
       * predictArriveTime
       * @type {string}
       */
      predictArriveTime;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * remark
       * @type {Array<defs.api1.RemarkDateVO>}
       */
      remark;

      /**
       * shippingOrderNo
       * @type {string}
       */
      shippingOrderNo;

      /**
       * shippingWorkOrderNo
       * @type {string}
       */
      shippingWorkOrderNo;

      /**
       * transportStatus
       * @type {Array<defs.api1.TransportStatusVO>}
       */
      transportStatus;
    }

    export class OrderOperateRecordVO {
      /**
       * 当前位置
       * @type {string}
       */
      address;

      /**
       * 辅助确认收货状态
       * @type {string}
       */
      assistStatus;

      /**
       * 附件记录
       * @type {Array<string>}
       */
      attachmentList;

      /**
       * 承运商
       * @type {string}
       */
      carrierName;

      /**
       * 客户状态
       * @type {string}
       */
      clientStatus;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * 数据来源
       * @type {string}
       */
      dataSource;

      /**
       * 司机姓名
       * @type {string}
       */
      driverName;

      /**
       * 司机手机
       * @type {string}
       */
      driverPhone;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 纬度
       * @type {string}
       */
      lat;

      /**
       * 经度
       * @type {string}
       */
      lng;

      /**
       * 物流日志
       * @type {string}
       */
      logisticsStatus;

      /**
       * omsOrderOperateRecordId
       * @type {number}
       */
      omsOrderOperateRecordId;

      /**
       * 订单id
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 订单状态
       * @type {string}
       */
      orderStatus;

      /**
       * 车牌号
       * @type {string}
       */
      plateNumber;

      /**
       * 备注
       * @type {string}
       */
      remark;
    }

    export class OrderReceiptVO {
      /**
       * 当前位置
       * @type {string}
       */
      address;

      /**
       * 附件类型  1,电子回单(小黑卡用) 2.业务单据 3.过程图片 4.跟踪管理
       * @type {string}
       */
      attachmentType;

      /**
       * 附件url
       * @type {Array<string>}
       */
      attachmentUrls;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * 是否异常，1：是；0：否
       * @type {string}
       */
      isAbnormity;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 经度
       * @type {string}
       */
      lat;

      /**
       * 经度
       * @type {string}
       */
      lng;

      /**
       * 订单id
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 操作类型 1.接收 2.转出 3.发运 4.送达 5.当前位置上报
       * @type {string}
       */
      operateType;

      /**
       * 回单id
       * @type {string}
       */
      receiptOrderId;

      /**
       * 回单状态
       * @type {string}
       */
      receiptStatus;

      /**
       * 回单类型。正常签收，异常签收
       * @type {string}
       */
      receiptType;

      /**
       * 备注
       * @type {string}
       */
      remark;
    }

    export class OrderVO {
      /**
       * 当前设备所有的位置信息
       * @type {Array<defs.api1.IotGpsVO>}
       */
      gpsData;

      /**
       * 订单费用信息
       * @type {defs.api1.OrderCostInfo}
       */
      orderCostInfo;

      /**
       * 操作日志
       * @type {Array<defs.api1.OrderOperateRecordVO>}
       */
      orderOperateRecordVOs;

      /**
       * 上报:上报事件和上报位置
       * @type {Array<string>}
       */
      reportList;

      /**
       * 设置上报节点
       * @type {Array<string>}
       */
      reportNodeList;

      /**
       * 匿名上报0：允许，1：不允许
       * @type {string}
       */
      reportStatus;

      /**
       * 订单主体
       * @type {defs.api1.RequestOrderVO}
       */
      requestOrderVO;
    }

    export class Page<T0 = any> {
      /**
       * other
       * @type {object}
       */
      other;

      /**
       * pageCount
       * @type {number}
       */
      pageCount;

      /**
       * pageIndex
       * @type {number}
       */
      pageIndex;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * rows
       * @type {Array<T0>}
       */
      rows;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * total
       * @type {number}
       */
      total;
    }

    export class RealtimeDataDTO {
      /**
       * 当日运量-件数
       * @type {number}
       */
      dayGoodsNum;

      /**
       * 当日运量-体积(立方)
       * @type {number}
       */
      dayGoodsVolume;

      /**
       * 当日运量-重量(吨)
       * @type {number}
       */
      dayGoodsWeight;

      /**
       * 当日订单数
       * @type {number}
       */
      dayOrderNum;

      /**
       * 飞线图数据
       * @type {Array<object>}
       */
      flyLineData;

      /**
       * 在途订车次
       * @type {number}
       */
      inTransitCarNum;

      /**
       * 在途订单数
       * @type {number}
       */
      inTransitOrderNum;

      /**
       * 实时消息内容
       * @type {Array<string>}
       */
      orderMsgList;

      /**
       * 回单待确认
       * @type {number}
       */
      receiptedWaitConfirmOrderNum;

      /**
       * 超时未送达
       * @type {number}
       */
      unArrivedNum;

      /**
       * 超时未提货
       * @type {number}
       */
      unPickUpNum;

      /**
       * 待派单数量
       * @type {number}
       */
      waitSendOrderNum;
    }

    export class RemarkDateVO {
      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * mobile
       * @type {string}
       */
      mobile;

      /**
       * remark
       * @type {string}
       */
      remark;
    }

    export class ReportedVO {
      /**
       * 当前位置
       * @type {string}
       */
      address;

      /**
       * attachmentName
       * @type {string}
       */
      attachmentName;

      /**
       * attachmentType
       * @type {string}
       */
      attachmentType;

      /**
       * attachmentUrl
       * @type {string}
       */
      attachmentUrl;

      /**
       * 附件url
       * @type {Array<string>}
       */
      attachmentUrls;

      /**
       * businessKey
       * @type {number}
       */
      businessKey;

      /**
       * 市
       * @type {string}
       */
      city;

      /**
       * 市编码
       * @type {string}
       */
      cityCode;

      /**
       * 业务单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * 识别二维码标识
       * @type {string}
       */
      identifierCode;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isAbnormity
       * @type {string}
       */
      isAbnormity;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 纬度
       * @type {string}
       */
      lat;

      /**
       * 经度
       * @type {string}
       */
      lng;

      /**
       * operateType
       * @type {string}
       */
      operateType;

      /**
       * 省
       * @type {string}
       */
      province;

      /**
       * 省编码
       * @type {string}
       */
      provinceCode;

      /**
       * 回单类型。正常签收，异常签收
       * @type {string}
       */
      receiptType;

      /**
       * 区
       * @type {string}
       */
      region;

      /**
       * 区编码
       * @type {string}
       */
      regionCode;

      /**
       * remark
       * @type {string}
       */
      remark;

      /**
       * 上报事件:车辆故障，堵车，事故，货物损坏
       * @type {string}
       */
      reportEvent;
    }

    export class RequestOrderParam {
      /**
       * agentsNo
       * @type {string}
       */
      agentsNo;

      /**
       * 业务员
       * @type {string}
       */
      businessMan;

      /**
       * 承运商
       * @type {string}
       */
      carriersName;

      /**
       * 业务单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * 企业id集合
       * @type {Array<number>}
       */
      companyIds;

      /**
       * 企业名称
       * @type {string}
       */
      companyName;

      /**
       * 下单日期开始时间
       * @type {string}
       */
      dateCreatedEnd;

      /**
       * 下单日期开始时间
       * @type {string}
       */
      dateCreatedStart;

      /**
       * 提货结束时间
       * @type {string}
       */
      deliveryDateEnd;

      /**
       * 提货开始时间
       * @type {string}
       */
      deliveryDateStart;

      /**
       * 设备状态
       * @type {string}
       */
      deviceStatus;

      /**
       * 司机手机号
       * @type {string}
       */
      driverPhone;

      /**
       * GCJ02,WGS84,BD09
       * @type {string}
       */
      gpsType;

      /**
       * 订单id
       * @type {number}
       */
      id;

      /**
       * 当前单据：回单未接受，2、历史单据：回单已接受
       * @type {string}
       */
      isCurrent;

      /**
       * 执行中，近期签收，历史签收
       * @type {string}
       */
      isDataSign;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 是否扫码查询0否，1是
       * @type {string}
       */
      isScanCode;

      /**
       * 业务单号喝设备号组合查询
       * @type {string}
       */
      keyWord;

      /**
       * 订单状态组合查询
       * @type {string}
       */
      keyWordStatus;

      /**
       * 订单状态组合查询,冗余字段
       * @type {Array<string>}
       */
      keyWordStatusList;

      /**
       * 小程序登陆手机号
       * @type {string}
       */
      mobileNumber;

      /**
       * 排除节点状态
       * @type {Array<string>}
       */
      noLogisticsStatusList;

      /**
       * 小程序排除的状态
       * @type {string}
       */
      noStatus;

      /**
       * 组织名称
       * @type {string}
       */
      organizationName;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * 回单状态状态
       * @type {string}
       */
      receiptStatus;

      /**
       * 近期签收和历史签收状态
       * @type {string}
       */
      recenStatus;

      /**
       * 小程序近期签收时间
       * @type {string}
       */
      recentDateEnd;

      /**
       * 小程序近期签收时间
       * @type {string}
       */
      recentDateStart;

      /**
       * 设备序列号
       * @type {string}
       */
      serialNo;

      /**
       * 发货单位
       * @type {string}
       */
      shipmentCompanyName;

      /**
       * 发货人
       * @type {string}
       */
      shipmentConsignor;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * 订单状态
       * @type {string}
       */
      status;

      /**
       * 收货单位
       * @type {string}
       */
      unloadingCompanyName;

      /**
       * 收货人
       * @type {string}
       */
      unloadingConsignor;

      /**
       * 获取表头参数
       * @type {defs.api1.UserGridQueryParam}
       */
      userGridQueryParam;
    }

    export class RequestOrderTotals {
      /**
       * 已送达总数
       * @type {number}
       */
      arrivedTotal;

      /**
       * 已派单总数
       * @type {number}
       */
      assignTotal;

      /**
       * 新建总数
       * @type {number}
       */
      newOrderTotal;

      /**
       * 已提货总数
       * @type {number}
       */
      pickTotal;

      /**
       * 回单待确认总数
       * @type {number}
       */
      receiptTotal;

      /**
       * 订单列表
       * @type {defs.api1.Page<defs.api1.RequestOrderVO>}
       */
      rows;

      /**
       * 运输中总数
       * @type {number}
       */
      transportTotal;
    }

    export class RequestOrderVO {
      /**
       * 地址
       * @type {string}
       */
      address;

      /**
       * 要求送达时间
       * @type {string}
       */
      arrivalDate;

      /**
       * 回单url
       * @type {Array<string>}
       */
      attachmentUrls;

      /**
       * 业务员id
       * @type {number}
       */
      businessId;

      /**
       * 业务员(来自用户)
       * @type {string}
       */
      businessMan;

      /**
       * 业务员手机(来自用户)
       * @type {string}
       */
      businessPhone;

      /**
       * 车辆id
       * @type {number}
       */
      carId;

      /**
       * 承运商id
       * @type {number}
       */
      carrierInfoId;

      /**
       * 承运商名称
       * @type {string}
       */
      carrierName;

      /**
       * 销售单号
       * @type {string}
       */
      clientOrderNo;

      /**
       * 企业id
       * @type {number}
       */
      companyInfoId;

      /**
       * 企业名称
       * @type {string}
       */
      companyName;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * 数据来源
       * @type {string}
       */
      dataSource;

      /**
       * 订单列表type:我收的，我发的
       * @type {string}
       */
      dataType;

      /**
       * 要求提货时间
       * @type {string}
       */
      deliveryDate;

      /**
       * 司机id
       * @type {string}
       */
      driverId;

      /**
       * 司机名称
       * @type {string}
       */
      driverName;

      /**
       * 司机联系方式
       * @type {string}
       */
      driverPhone;

      /**
       * 订单导入字段错误说明
       * @type {string}
       */
      errorMsg;

      /**
       * 货物名称
       * @type {string}
       */
      goodsName;

      /**
       * 货物状态
       * @type {string}
       */
      goodsStatus;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * 二维码标识
       * @type {string}
       */
      identifierCode;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 纬度
       * @type {string}
       */
      loclat;

      /**
       * 经度
       * @type {string}
       */
      loclng;

      /**
       * omsRequestOrderId
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 节点最新时间
       * @type {string}
       */
      operateRecordDate;

      /**
       * 节点最新状态
       * @type {string}
       */
      operateRecordStatus;

      /**
       * 组织名称
       * @type {string}
       */
      organizationName;

      /**
       * 车牌号
       * @type {string}
       */
      plateNumber;

      /**
       * 数量单位
       * @type {string}
       */
      quantityUnit;

      /**
       * 实际送达时间
       * @type {string}
       */
      realityArrivalDate;

      /**
       * 实际提货时间
       * @type {string}
       */
      realityDeliveryDate;

      /**
       * 回单备注
       * @type {string}
       */
      receiptRemark;

      /**
       * 回单状态
       * @type {string}
       */
      receiptStatus;

      /**
       * 签收类型，差异签收，正常签收
       * @type {string}
       */
      receiptType;

      /**
       * 收货状态
       * @type {string}
       */
      receivedStatus;

      /**
       * 物流订单备注
       * @type {string}
       */
      remark;

      /**
       * 设备序列号
       * @type {string}
       */
      serialNo;

      /**
       * 发货人详细地址
       * @type {string}
       */
      shipmentAddress;

      /**
       * 发货市
       * @type {string}
       */
      shipmentCity;

      /**
       * 发卸货市编码
       * @type {string}
       */
      shipmentCityNo;

      /**
       * 发货单位
       * @type {string}
       */
      shipmentCompanyName;

      /**
       * 发货单位编码
       * @type {string}
       */
      shipmentCompanyNo;

      /**
       * 发货人
       * @type {string}
       */
      shipmentConsignor;

      /**
       * 发货人联系电话
       * @type {string}
       */
      shipmentContacts;

      /**
       *  发货省
       * @type {string}
       */
      shipmentProvince;

      /**
       * 发货省代码
       * @type {string}
       */
      shipmentProvinceNo;

      /**
       * 发货区
       * @type {string}
       */
      shipmentRegion;

      /**
       * 发货区代码
       * @type {string}
       */
      shipmentRegionNo;

      /**
       * 货物信息
       * @type {Array<defs.api1.ShippingOrderVO>}
       */
      shippingOrderVOs;

      /**
       * 显示时间
       * @type {string}
       */
      showTime;

      /**
       *  订单状态
       * @type {string}
       */
      status;

      /**
       * 总费用
       * @type {number}
       */
      totalCost;

      /**
       * 总数量
       * @type {number}
       */
      totalQuantity;

      /**
       * 总体积
       * @type {number}
       */
      totalVolume;

      /**
       * 总重量
       * @type {number}
       */
      totalWeight;

      /**
       * 收货人详细地址
       * @type {string}
       */
      unloadingAddress;

      /**
       * 收货市
       * @type {string}
       */
      unloadingCity;

      /**
       * 收货市编码
       * @type {string}
       */
      unloadingCityNo;

      /**
       * 收货单位
       * @type {string}
       */
      unloadingCompanyName;

      /**
       * 收货单位编码
       * @type {string}
       */
      unloadingCompanyNo;

      /**
       * 收货人
       * @type {string}
       */
      unloadingConsignor;

      /**
       * 收货人联系电话
       * @type {string}
       */
      unloadingContacts;

      /**
       *  收货省
       * @type {string}
       */
      unloadingProvince;

      /**
       * 收货省代码
       * @type {string}
       */
      unloadingProvinceNo;

      /**
       * 收货区
       * @type {string}
       */
      unloadingRegion;

      /**
       * 收货区代码
       * @type {string}
       */
      unloadingRegionNo;

      /**
       * 体积单位
       * @type {string}
       */
      volumeUnit;

      /**
       * 重量单位
       * @type {string}
       */
      weightUnit;
    }

    export class ShippingOrderVO {
      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * 货物型号
       * @type {string}
       */
      goodsModel;

      /**
       * 货物名称
       * @type {string}
       */
      goodsName;

      /**
       * id
       * @type {number}
       */
      id;

      /**
       * inputDate
       * @type {string}
       */
      inputDate;

      /**
       * inputMan
       * @type {string}
       */
      inputMan;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * 物流订单ID
       * @type {number}
       */
      omsRequestOrderId;

      /**
       * 数量
       * @type {number}
       */
      quantity;

      /**
       * 数量单位
       * @type {string}
       */
      quantityUnit;

      /**
       * 体积
       * @type {number}
       */
      volume;

      /**
       * 体积单位
       * @type {string}
       */
      volumeUnit;

      /**
       * 重量
       * @type {number}
       */
      weight;

      /**
       * 重量单位
       * @type {string}
       */
      weightUnit;
    }

    export class TransportRequirementVO {
      /**
       * detail
       * @type {Array<string>}
       */
      detail;

      /**
       * type
       * @type {string}
       */
      type;

      /**
       * typeName
       * @type {string}
       */
      typeName;
    }

    export class TransportStatusVO {
      /**
       * address
       * @type {string}
       */
      address;

      /**
       * afterDriverPhone
       * @type {string}
       */
      afterDriverPhone;

      /**
       * afterLicensePlate
       * @type {string}
       */
      afterLicensePlate;

      /**
       * city
       * @type {string}
       */
      city;

      /**
       * cityCode
       * @type {string}
       */
      cityCode;

      /**
       * createDate
       * @type {string}
       */
      createDate;

      /**
       * createMan
       * @type {string}
       */
      createMan;

      /**
       * lat
       * @type {string}
       */
      lat;

      /**
       * lng
       * @type {string}
       */
      lng;

      /**
       * orderStatus
       * @type {string}
       */
      orderStatus;

      /**
       * province
       * @type {string}
       */
      province;

      /**
       * provinceCode
       * @type {string}
       */
      provinceCode;

      /**
       * region
       * @type {string}
       */
      region;

      /**
       * regionCode
       * @type {string}
       */
      regionCode;
    }

    export class UpdateEnableStatusParam {
      /**
       * 代操作的承运商id列表
       * @type {Array<number>}
       */
      carrierIds;

      /**
       * 操作的状态 0启用 1禁用
       * @type {string}
       */
      enableStatus;
    }

    export class UserGridQueryParam {
      /**
       * canSort
       * @type {boolean}
       */
      canSort;

      /**
       * gridName
       * @type {string}
       */
      gridName;

      /**
       * isDeleted
       * @type {string}
       */
      isDeleted;

      /**
       * operatorId
       * @type {string}
       */
      operatorId;

      /**
       * pageSize
       * @type {number}
       */
      pageSize;

      /**
       * partyId
       * @type {string}
       */
      partyId;

      /**
       * pinned
       * @type {string}
       */
      pinned;

      /**
       * start
       * @type {number}
       */
      start;

      /**
       * version
       * @type {string}
       */
      version;

      /**
       * visibleFlag
       * @type {boolean}
       */
      visibleFlag;
    }

    export class YesterdayDataDTO {
      /**
       * 送达订单日环比
       * @type {number}
       */
      arrivedOrderDayRate;

      /**
       * 实际送达的订单量
       * @type {number}
       */
      arrivedOrderNum;

      /**
       * 送达订单周同比
       * @type {number}
       */
      arrivedOrderWeekRate;

      /**
       * 总费用日环比
       * @type {number}
       */
      costDayRate;

      /**
       * 总费用周同比
       * @type {number}
       */
      costWeekRate;

      /**
       * 准点率日环比
       * @type {number}
       */
      onTimeDayRate;

      /**
       * 送达准点率
       * @type {number}
       */
      onTimeRate;

      /**
       * 准点率周同比
       * @type {number}
       */
      onTimeWeekRate;

      /**
       * 订单量日环比
       * @type {number}
       */
      orderDayRate;

      /**
       * 订单量
       * @type {number}
       */
      orderNum;

      /**
       * 订单量周同比
       * @type {number}
       */
      orderWeekRate;

      /**
       * 总费用
       * @type {number}
       */
      totalCost;

      /**
       * 总体积(立方)
       * @type {number}
       */
      totalVolume;

      /**
       * 总重量(吨)
       * @type {number}
       */
      totalWeight;

      /**
       * 总体积日环比
       * @type {number}
       */
      volumeDayRate;

      /**
       * 总体积周同比
       * @type {number}
       */
      volumeWeekRate;

      /**
       * 总重量日环比
       * @type {number}
       */
      weightDayRate;

      /**
       * 总重量周同比
       * @type {number}
       */
      weightWeekRate;
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
          /**
           * 车辆id
           * @type {number}
           */
          carId;
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
          /**
           * 车辆id
           * @type {number}
           */
          carId;
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
          /**
           * carId
           * @type {number}
           */
          '车辆id';
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
          /**
           * 车牌号
           * @type {string}
           */
          plateNumber;
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
          /**
           * address
           * @type {string}
           */
          address;
          /**
           * carrierName
           * @type {string}
           */
          carrierName;
          /**
           * carrierNo
           * @type {string}
           */
          carrierNo;
          /**
           * city
           * @type {string}
           */
          city;
          /**
           * cityNo
           * @type {string}
           */
          cityNo;
          /**
           * companyInfoId
           * @type {number}
           */
          companyInfoId;
          /**
           * enableStatus
           * @type {string}
           */
          enableStatus;
          /**
           * identityNumber
           * @type {string}
           */
          identityNumber;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * keyWord
           * @type {string}
           */
          keyWord;
          /**
           * linkMan
           * @type {string}
           */
          linkMan;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * phone
           * @type {string}
           */
          phone;
          /**
           * province
           * @type {string}
           */
          province;
          /**
           * provinceNo
           * @type {string}
           */
          provinceNo;
          /**
           * realName
           * @type {string}
           */
          realName;
          /**
           * region
           * @type {string}
           */
          region;
          /**
           * regionNo
           * @type {string}
           */
          regionNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * tel
           * @type {string}
           */
          tel;
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
          /**
           * 设备ID
           * @type {number}
           */
          id;
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
          /**
           * 设备ID
           * @type {number}
           */
          id;
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
          /**
           * code
           * @type {string}
           */
          code;
          /**
           * createDate
           * @type {string}
           */
          createDate;
          /**
           * createMan
           * @type {string}
           */
          createMan;
          /**
           * description
           * @type {string}
           */
          description;
          /**
           * id
           * @type {number}
           */
          id;
          /**
           * inputDate
           * @type {string}
           */
          inputDate;
          /**
           * inputMan
           * @type {string}
           */
          inputMan;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * realName
           * @type {string}
           */
          realName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * typeName
           * @type {string}
           */
          typeName;
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
          /**
           * id
           * @type {number}
           */
          id;
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
          /**
           * PLATFORM_CAR_LENGTH_TYPE=车型;PLATFORM_CAR_TYPE=车长
           * @type {string}
           */
          type;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
          /**
           * fileName
           * @type {string}
           */
          fileName;
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
        export class Params {}

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
          /**
           * goodsModelNo
           * @type {string}
           */
          goodsModelNo;
          /**
           * goodsName
           * @type {string}
           */
          goodsName;
          /**
           * goodsNo
           * @type {string}
           */
          goodsNo;
          /**
           * goodsPackage
           * @type {string}
           */
          goodsPackage;
          /**
           * goodsType
           * @type {string}
           */
          goodsType;
          /**
           * goodsUnit
           * @type {string}
           */
          goodsUnit;
          /**
           * id
           * @type {number}
           */
          id;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * keyWord
           * @type {string}
           */
          keyWord;
          /**
           * packingType
           * @type {string}
           */
          packingType;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * realName
           * @type {string}
           */
          realName;
          /**
           * remark
           * @type {string}
           */
          remark;
          /**
           * start
           * @type {number}
           */
          start;
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
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
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
          /**
           * remark
           * @type {string}
           */
          remark;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * trackName
           * @type {string}
           */
          trackName;
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
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * affiliatedCompany
           * @type {string}
           */
          affiliatedCompany;
          /**
           * bindingTimeEnd
           * @type {string}
           */
          bindingTimeEnd;
          /**
           * bindingTimeStart
           * @type {string}
           */
          bindingTimeStart;
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
          /**
           * comyIds
           * @type {Array<number>}
           */
          comyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * omsDeviceId
           * @type {number}
           */
          omsDeviceId;
          /**
           * omsRequestOrderId
           * @type {number}
           */
          omsRequestOrderId;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * partyId
           * @type {number}
           */
          partyId;
          /**
           * requestOrderNo
           * @type {string}
           */
          requestOrderNo;
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
          /**
           * start
           * @type {number}
           */
          start;
          /**
           * trackName
           * @type {string}
           */
          trackName;
          /**
           * type
           * @type {string}
           */
          type;
          /**
           * unBindingTimeEnd
           * @type {string}
           */
          unBindingTimeEnd;
          /**
           * unBindingTimeStart
           * @type {string}
           */
          unBindingTimeStart;
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
          /**
           * 绑定状态
           * @type {string}
           */
          bindingStatus;
          /**
           * 所属企业
           * @type {Array<number>}
           */
          companyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * 精确查询：1，模糊查询：0
           * @type {number}
           */
          isExact;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * 会员id
           * @type {string}
           */
          partyId;
          /**
           * 查询的号码
           * @type {string}
           */
          queryNo;
          /**
           * start
           * @type {number}
           */
          start;
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
          /**
           * 绑定状态
           * @type {string}
           */
          bindingStatus;
          /**
           * 所属企业
           * @type {Array<number>}
           */
          companyIds;
          /**
           * isDeleted
           * @type {string}
           */
          isDeleted;
          /**
           * 精确查询：1，模糊查询：0
           * @type {number}
           */
          isExact;
          /**
           * pageSize
           * @type {number}
           */
          pageSize;
          /**
           * 会员id
           * @type {string}
           */
          partyId;
          /**
           * 查询的号码
           * @type {string}
           */
          queryNo;
          /**
           * start
           * @type {number}
           */
          start;
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
          /**
           * devicesNo
           * @type {string}
           */
          devicesNo;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * endCreateDate
           * @type {string}
           */
          endCreateDate;
          /**
           * gpsType
           * @type {string}
           */
          gpsType;
          /**
           * orderNo
           * @type {string}
           */
          orderNo;
          /**
           * startCreateDate
           * @type {string}
           */
          startCreateDate;
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
          /**
           * serialNo
           * @type {string}
           */
          serialNo;
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
          /**
           * queryNo
           * @type {string}
           */
          queryNo;
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
          /**
           * queryNo
           * @type {string}
           */
          queryNo;
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
          /**
           * clientOrderNo
           * @type {string}
           */
          clientOrderNo;
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
        export class Params {}

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
