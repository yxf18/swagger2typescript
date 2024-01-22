// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取系统日志列表 POST /adminapi/syslog/list */
export async function listUsingPOST2(
  body: API.XiTongRiZhiDeChaXunDuiXiang,
  options?: { [key: string]: any },
) {
  return request<API.RJiBenDeFenYeJieGuoDuiXiangXiTongShenJiRiZhiPoDuiXiang>(
    '/adminapi/syslog/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
