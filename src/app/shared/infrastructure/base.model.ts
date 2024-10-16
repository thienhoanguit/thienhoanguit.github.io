export class BaseModel {
    id: string = '';
    createdAt?: Date;
    modifiedAt?: Date;
    userId?: string;
  
    constructor() {
      this.createdAt = new Date();  // Khởi tạo thời gian tạo bản ghi
    }
  
    setModifiedAt() {
      this.modifiedAt = new Date(); // Cập nhật thời gian sửa bản ghi
    }
    // Phương thức linh động để chuyển đối tượng thành đối tượng thuần túy
  toPlainObject(): any {
    const plainObject: any = {};
    
    // Sử dụng for...in để lặp qua các thuộc tính của đối tượng (bao gồm cả thừa kế)
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        plainObject[key] = this[key];
      }
    }

    return plainObject;
  }
}
  