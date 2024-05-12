import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "chipColor",
  standalone: true,
})
export class ChipColorPipe implements PipeTransform {
  transform(method: string): "primary" | "accent" | "warn" {
    switch (method) {
      case "GET":
        return "primary";
      case "POST":
      case "PUT":
      case "PATCH":
        return "accent";
      case "DELETE":
        return "warn";
      default:
        return "primary";
    }
  }
}
