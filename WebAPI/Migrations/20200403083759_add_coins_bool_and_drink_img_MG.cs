using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class add_coins_bool_and_drink_img_MG : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "FiveCoin",
                table: "Machines",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "OneCoin",
                table: "Machines",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "TenCoin",
                table: "Machines",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "TwoCoin",
                table: "Machines",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<byte[]>(
                name: "Image",
                table: "Drinks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FiveCoin",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "OneCoin",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "TenCoin",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "TwoCoin",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Drinks");
        }
    }
}
