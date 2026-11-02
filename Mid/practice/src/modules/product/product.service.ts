import { Repository } from "typeorm";
import { Product } from "./entity/product.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createProductDto, updateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) {}

    async getAllProducts() {
        try {
            const product = await this.productRepository.find();
            return product;
        } catch (error) {
            throw error;
        }
    }

    async getProduct(id: string) {
        try {
            if (!id) {
                throw new NotFoundException("Product not found");
            }
            const product = await this.productRepository.findOne({ where: { id: id } });
            return product;
        } catch (error) {
            throw error;
        }
    }

    async createProduct(dto: createProductDto) {
        try {
            const response = this.productRepository.create(dto);
            return await this.productRepository.save(response);
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id: string, dto: updateProductDto) {
        try {
            if (!id) {
                throw new NotFoundException("Product not found");
            }
            const product = await this.productRepository.findOne({ where: { id: id } });
            if (!product) {
                throw new NotFoundException("Product  not found");
            }
            Object.assign(product, dto);
            const {id: uid, created_at,updated_at, ...rest} = product;
            return await this.productRepository.update({ id: id }, rest);
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id: string) {
        try {
            const product = await this.productRepository.findOne({ where: { id: id } });
            if (!product) {
                throw new NotFoundException("Product  not found");
            }
            return await this.productRepository.delete({ id: id });
        } catch (error) {
            throw error;
        }
    }
}