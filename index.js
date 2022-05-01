const chalk = require("chalk");
const { secureHeapUsed } = require("crypto");

knowSite = {
    youtube: {
        url: "https://www.youtube.com",
        description: "Watch entertaining videos for free."
    },
    google: {
        url: "https://www.google.com",
        description: "Do your search with the largest search engine."
    }
}

console.log(chalk.bgCyan(chalk.black(chalk.bold("Powered by Mids"))));
console.log("")
console.log("---------");
console.log("")
console.log(chalk.blue('██    ██ ███████ ██████  ██ ███████ ██    ██     ██      ██ ███    ██ ██   ██ '));
console.log(chalk.blue("██    ██ ██      ██   ██ ██ ██       ██  ██      ██      ██ ████   ██ ██  ██"));
console.log(chalk.blue("██    ██ █████   ██████  ██ █████     ████       ██      ██ ██ ██  ██ █████ "));
console.log(chalk.blue(" ██  ██  ██      ██   ██ ██ ██         ██        ██      ██ ██  ██ ██ ██  ██ "));
console.log(chalk.blue('  ████   ███████ ██   ██ ██ ██         ██        ███████ ██ ██   ████ ██   ██'));
console.log("")
console.log("---------");
console.log("");
console.log(chalk.bgHex('#ff4d4f').black("WARNING : If our program claims that the site is secure, it is because it SEEMS secure. We do not recommend that you download anything from a so-called unsecured site. Our program is a quick and easy way to find out if the site is secure or not."))


const rl = require("readline")

const userLinkInput = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("");
console.log("---------");
console.log("");

test = function () {
    console.log(chalk.bgHex('#ff4d4f').black("You didn't provide any input."))
    userLinkInput.close()
}

function secure() {
    console.log("");
    console.log("");
    console.log("");
    console.log(chalk.hex("#19ff90")("  ██████ ▓█████  ▄████▄   █    ██  ██▀███  ▓█████ "));
    console.log(chalk.hex("#19ff90")("▒██    ▒ ▓█   ▀ ▒██▀ ▀█   ██  ▓██▒▓██ ▒ ██▒▓█   ▀ "));
    console.log(chalk.hex("#19ff90")("░ ▓██▄   ▒███   ▒▓█    ▄ ▓██  ▒██░▓██ ░▄█ ▒▒███   "));
    console.log(chalk.hex("#19ff90")("  ▒   ██▒▒▓█  ▄ ▒▓▓▄ ▄██▒▓▓█  ░██░▒██▀▀█▄  ▒▓█  ▄ "));
    console.log(chalk.hex("#19ff90")("▒██████▒▒░▒████▒▒ ▓███▀ ░▒▒█████▓ ░██▓ ▒██▒░▒████▒"));
    console.log(chalk.hex("#19ff90")("▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░░ ▒░ ░"));
    console.log(chalk.hex("#19ff90")("░ ░▒  ░ ░ ░ ░  ░  ░  ▒   ░░▒░ ░ ░   ░▒ ░ ▒░ ░ ░  ░"));
    console.log(chalk.hex("#19ff90")("░  ░  ░     ░   ░         ░░░ ░ ░   ░░   ░    ░   "));
    console.log(chalk.hex("#19ff90")("      ░     ░  ░░ ░         ░        ░        ░  ░"));
    console.log(chalk.hex("#19ff90")("                ░                                 "));
    console.log("");
    console.log("");
    console.log("");
    console.log(chalk.bgCyan.black("Thanks for using this program !"))
    userLinkInput.close()
}
function notsecure() {
    console.log("");
    console.log("");
    console.log("");
    console.log(chalk.hex("#ff0a5c")(" ███▄    █  ▒█████  ▄▄▄█████▓     ██████ ▓█████  ▄████▄   █    ██  ██▀███  ▓█████ "));
    console.log(chalk.hex("#ff0a5c")(" ██ ▀█   █ ▒██▒  ██▒▓  ██▒ ▓▒   ▒██    ▒ ▓█   ▀ ▒██▀ ▀█   ██  ▓██▒▓██ ▒ ██▒▓█   ▀ "));
    console.log(chalk.hex("#ff0a5c")("▓██  ▀█ ██▒▒██░  ██▒▒ ▓██░ ▒░   ░ ▓██▄   ▒███   ▒▓█    ▄ ▓██  ▒██░▓██ ░▄█ ▒▒███   "));
    console.log(chalk.hex("#ff0a5c")("▓██▒  ▐▌██▒▒██   ██░░ ▓██▓ ░      ▒   ██▒▒▓█  ▄ ▒▓▓▄ ▄██▒▓▓█  ░██░▒██▀▀█▄  ▒▓█  ▄ "));
    console.log(chalk.hex("#ff0a5c")("▒██░   ▓██░░ ████▓▒░  ▒██▒ ░    ▒██████▒▒░▒████▒▒ ▓███▀ ░▒▒█████▓ ░██▓ ▒██▒░▒████▒"));
    console.log(chalk.hex("#ff0a5c")("░ ▒░   ▒ ▒ ░ ▒░▒░▒░   ▒ ░░      ▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░░ ▒░ ░"));
    console.log(chalk.hex("#ff0a5c")("░ ░░   ░ ▒░  ░ ▒ ▒░     ░       ░ ░▒  ░ ░ ░ ░  ░  ░  ▒   ░░▒░ ░ ░   ░▒ ░ ▒░ ░ ░  ░"));
    console.log(chalk.hex("#ff0a5c")("   ░   ░ ░ ░ ░ ░ ▒    ░         ░  ░  ░     ░   ░         ░░░ ░ ░   ░░   ░    ░   "));
    console.log(chalk.hex("#ff0a5c")("         ░     ░ ░                    ░     ░  ░░ ░         ░        ░        ░  ░"));
    console.log(chalk.hex("#ff0a5c")("                                                ░                                 "));
    console.log("");
    console.log(""); 
    console.log("");
    console.log(chalk.bgCyan.black("Thanks for using this program !"))
    userLinkInput.close()
}
userLinkInput.question(chalk.bgMagenta("URL:") + " ", (input) => {
    if (input === "") {
        return test()
    } else {
        if (input.startsWith("https://www")) {
            return secure()
        } else {
            return notsecure()
        }
        userLinkInput.close()
    }
})

