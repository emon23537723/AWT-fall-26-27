
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { createProductDto, updateProductDto } from "./dto/product.dto";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(":id")
  async getProduct(@Param("id") id: string) {
    return await this.productService.getProduct(id);
  }

  @Post()
  async createProduct(@Body() dto: createProductDto) {
    return await this.productService.createProduct(dto);
  }

  @Patch(":id")
  async updateProduct(@Param("id") id: string, @Body() dto: updateProductDto) {
    return await this.productService.updateProduct(id, dto);
  }

  @Delete(":id")
  async deleteProduct(@Param("id") id: string) {
    return await this.productService.deleteProduct(id);
  }
}