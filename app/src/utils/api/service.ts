import axios, { AxiosRequestConfig } from "axios";
import tokenStorage from "../../stores/user/tokenStorage";

export default class Service {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async getConfig(): Promise<AxiosRequestConfig> {
    const token = await tokenStorage.getToken();
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : undefined
      }
    };
  }

  public get<T>(endpoint: string) {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const config = await this.getConfig();
        const response = await axios.get(this.baseURL + endpoint, config);
        resolve(response.data);
      } catch (error) {
        if (error.response) reject(error.response.data);
        else reject(error);
      }
    });
  }

  public post<T>(endpoint: string, data: any) {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const config = await this.getConfig();
        const response = await axios.post(
          this.baseURL + endpoint,
          data,
          config
        );
        resolve(response.data);
      } catch (error) {
        if (error.response) reject(error.response.data);
        else reject(error);
      }
    });
  }

  public put<T>(endpoint: string, data: any) {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const config = await this.getConfig();
        const response = await axios.put(this.baseURL + endpoint, data, config);
        resolve(response.data);
      } catch (error) {
        if (error.response) reject(error.response.data);
        else reject(error);
      }
    });
  }

  public delete<T>(endpoint: string) {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const config = await this.getConfig();
        const response = await axios.delete(this.baseURL + endpoint, config);
        resolve(response.data);
      } catch (error) {
        if (error.response) reject(error.response.data);
        else reject(error);
      }
    });
  }
}
