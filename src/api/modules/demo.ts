import { ResPageRow } from "../interface/common";

export interface IDemo {
  id: number;
  title: string;
  description: string;
  updated_at: number;
  created_at: number;
}

export const demoApi = {
  /**
   * @name 获取列表
   */
  list: async (params: any = {}) => {
    const result = {
      total: 3,
      rows: [
        {
          id: 1,
          title: "测试标题1",
          description: "测试描述",
          updated_at: 1718191483,
          created_at: 1718191483,
        },
        {
          id: 2,
          title: "测试标题2",
          description: "测试描述2",
          updated_at: 1718191483,
          created_at: 1718191483,
        },
        {
          id: 3,
          title: "测试标题3",
          description: "测试描述3",
          updated_at: 1718191483,
          created_at: 1718191483,
        },
      ],
    };

    return result as ResPageRow<IDemo>;
  },

  detail: async (id: string) => {
    return {
      id: 3,
      title: "测试标题3",
      description: "测试描述3",
      updated_at: 1718191483,
      created_at: 1718191483,
    } as IDemo;
  },

  /**
   * @name 新增
   */
  add: async (item: any) => {
    return true;
  },

  /**
   * @name 编辑
   */
  edit: async (id: number, item: any) => {
    return true;
  },

  /**
   * @name 删除
   */
  del: async (id: string) => {
    return true;
  },

  /**
   * @name 批量删除
   */
  batchDel: async (idList: string[]) => {
    return true;
  },
};
