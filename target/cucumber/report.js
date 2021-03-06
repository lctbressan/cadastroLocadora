$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/compas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Compras",
  "description": "\nCOMO um analista de qualidade\nEU devo comprar produtos na loja\nPARA validar as funcionalidades",
  "id": "compras",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "############################################################################################################"
    },
    {
      "line": 9,
      "value": "#### @author Luis Bressan  \t\t\t##################################################################################"
    },
    {
      "line": 10,
      "value": "#### @ PBI: 12345\t\t\t\t\t \t###############################################"
    },
    {
      "line": 11,
      "value": "############################################################################################################"
    },
    {
      "line": 12,
      "value": "# CT01 - Pesquisa Diretores"
    },
    {
      "line": 13,
      "value": "############################################################################################################"
    }
  ],
  "line": 14,
  "name": "[PBI 456789] \"\u003cCenario\u003e\"-\"\u003cDescricaoDoCenario\u003e\"",
  "description": "",
  "id": "compras;[pbi-456789]-\"\u003ccenario\u003e\"-\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 15,
  "name": "que esteje no site de pesquisa \"\u003cSite\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "clique em SigIn",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencha os campos \"\u003cLogin\u003e\" e \"\u003cSenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "Clica em SubmitSigIn",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "Pesquisa o produto \"\u003cProduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "Seleciona produto \"\u003cLink\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "Add to cart",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "Proceed to checkout",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "Proceed to checkout1",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "Proceed to checkout1",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "Concorde com os termos",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "Proceed to checkout2",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "PaybyBankWire",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "Confirmar meu pedido",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "Confirma pedido",
  "keyword": "Entao "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "compras;[pbi-456789]-\"\u003ccenario\u003e\"-\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Cenario",
        "DescricaoDoCenario",
        "Site",
        "Login",
        "Senha",
        "Produto",
        "Link"
      ],
      "line": 33,
      "id": "compras;[pbi-456789]-\"\u003ccenario\u003e\"-\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CT01.1",
        "Compras",
        "automationprice",
        "lctbressan@gmail.com",
        "123456",
        "Printed Dress",
        "http://automationpractice.com/index.php?id_product\u003d7\u0026controller\u003dproduct\u0026search_query\u003dPrinted+Dress\u0026results\u003d5"
      ],
      "line": 34,
      "id": "compras;[pbi-456789]-\"\u003ccenario\u003e\"-\"\u003cdescricaodocenario\u003e\";;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 40807900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "[PBI 456789] \"CT01.1\"-\"Compras\"",
  "description": "",
  "id": "compras;[pbi-456789]-\"\u003ccenario\u003e\"-\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 15,
  "name": "que esteje no site de pesquisa \"automationprice\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "clique em SigIn",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencha os campos \"lctbressan@gmail.com\" e \"123456\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "Clica em SubmitSigIn",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "Pesquisa o produto \"Printed Dress\"",
  "matchedColumns": [
    5
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "Seleciona produto \"http://automationpractice.com/index.php?id_product\u003d7\u0026controller\u003dproduct\u0026search_query\u003dPrinted+Dress\u0026results\u003d5\"",
  "matchedColumns": [
    6
  ],
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "Add to cart",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "Proceed to checkout",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "Proceed to checkout1",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "Proceed to checkout1",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "Concorde com os termos",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "Proceed to checkout2",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "PaybyBankWire",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "Confirmar meu pedido",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "Confirma pedido",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "automationprice",
      "offset": 32
    }
  ],
  "location": "validarCompras.que_esteje_no_site_de_pesquisa(String)"
});
formatter.result({
  "duration": 12961742500,
  "status": "passed"
});
formatter.match({
  "location": "validarCompras.clique_em_SigIn()"
});
formatter.result({
  "duration": 2330350400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lctbressan@gmail.com",
      "offset": 20
    },
    {
      "val": "123456",
      "offset": 45
    }
  ],
  "location": "validarCompras.preencha_os_campos_e(String,String)"
});
formatter.result({
  "duration": 658010400,
  "status": "passed"
});
formatter.match({
  "location": "validarCompras.clica_em_SubmitSigIn()"
});
formatter.result({
  "duration": 1628670500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "validarCompras.pesquisa_o_produto(String)"
});
formatter.result({
  "duration": 2400033900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://automationpractice.com/index.php?id_product\u003d7\u0026controller\u003dproduct\u0026search_query\u003dPrinted+Dress\u0026results\u003d5",
      "offset": 19
    }
  ],
  "location": "validarCompras.seleciona_produto(String)"
});
formatter.result({
  "duration": 2162207700,
  "status": "passed"
});
formatter.match({
  "location": "validarCompras.Add_To_Cart()"
});
formatter.result({
  "duration": 828190900,
  "status": "passed"
});
formatter.match({
  "location": "validarCompras.proceed_to_checkout()"
});
formatter.result({
  "duration": 6734593600,
  "status": "passed"
});
formatter.match({
  "location": "validarCompras.proceed_to_checkout1()"
});
formatter.result({
  "duration": 4165717700,
  "status": "passed"
});
formatter.match({
  "location": "validarCompras.proceed_to_checkout1()"
});
formatter.result({
  "duration": 2040141200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Proceed to checkout\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.120)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027NBBRT002\u0027, ip: \u002710.10.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}), userDataDir\u003dC:\\Users\\lctbr\\AppData\\Local\\Temp\\scoped_dir10620_466484700}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61157}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.120, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows nt, setWindowRect\u003dtrue}]\nSession ID: 0e4ea5a451420fc43ba26d65ad97cb7d\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Proceed to checkout\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat br.com.compras.steps.validarCompras.proceed_to_checkout1(validarCompras.java:148)\r\n\tat ✽.E Proceed to checkout1(resources/features/compas.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "validarCompras.concorde_com_os_termos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validarCompras.proceed_to_checkout2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validarCompras.PaybyBankWire()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validarCompras.confirmar_meu_pedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "validarCompras.confirma_pedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9376700,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.listener.Reporter.loadXMLConfig(Reporter.java:53)\r\n\tat br.com.compras.steps.validarCompras.tearDown(validarCompras.java:201)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.base/java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});