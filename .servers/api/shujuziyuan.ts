// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 动态加载文件 预览文件 POST /sys/resource/convertJar/${param0} */
export async function convertJarUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.convertJarUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/resource/convertJar/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除数据资源 删除数据资源 POST /sys/resource/del/${param0} */
export async function delUsingPOST13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST13Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/resource/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取应用系统列表 分页查询-获取应用系统列表 POST /sys/resource/getPages */
export async function getPageUsingPOST2(options?: { [key: string]: any }) {
  return request<any>('/sys/resource/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 预览文件 预览文件 POST /sys/resource/preview/${param0} */
export async function previewFileUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.previewFileUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/resource/preview/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 上传文件 上传文件，重新上传需传id POST /sys/resource/upload */
export async function uploadFileUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFileUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sys/resource/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
