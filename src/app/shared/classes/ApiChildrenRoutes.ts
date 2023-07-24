import { map, Observable } from "rxjs";
import { ILink } from "../interfaces/i-link";
import { ApiService } from "../services/api.service";

export class ApiChildrenRoutes {

    static getChildrenRoutesFromApi(apiService: ApiService<any>, propertyName: string, baseRoute: string): Observable<ILink[]> {

        return apiService.getAll().pipe(
            map(x => x.map(el => {
                return {
                    title: el[propertyName], 
                    route: baseRoute + el.id
                };
            })
        ));



    }
}