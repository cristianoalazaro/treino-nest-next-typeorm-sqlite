import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: "users" })
@ObjectType()
export class UserEntity {
  @PrimaryColumn()
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  name: string
}
